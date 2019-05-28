import { prisma } from 'generated/prisma-client';

const fragment = `
  fragment BoardWithCards on Board {
    id
    name
    description
    columns {
      id
      name
      settings
      cards {
        id
        name
        description
      }
    }
  }
`;

const getBoard = async (req, res) => {
  try {
    const { params: { id } } = req;
    const board = await prisma.board({ id }).$fragment(fragment);
    res.status(200).json(board);
  } catch (e) {
    res.status(422).json({
      error: e.message,
      raw: e,
    });
  }
};

const editBoard = async (req, res) => {
  try {
    const { params: { id }, body: { name, description, columns } } = req;

    await prisma.updateBoard({ data: { name, description }, where: { id } });

    const boardColumns = await prisma.columns({ where: { board: { id } } });
    const needDelete = boardColumns
      .filter(col => !columns.some(c => c.id === col.id))
      .map(col => col.id);
    await prisma.deleteManyColumns({ id_in: needDelete });
    await prisma.deleteManyCards({ column: { id_in: needDelete } });
    await Promise.all(columns.map(async (col) => {
      await prisma.upsertColumn({
        where: {
          id: col.id || '',
        },
        update: {
          name: col.name,
        },
        create: {
          name: col.name,
          board: {
            connect: {
              id,
            },
          },
        },
      });
    }));

    const board = await prisma.board({ id }).$fragment(fragment);
    res.status(200).json(board);
  } catch (e) {
    res.status(422).json({
      error: e.message,
      raw: e,
    });
  }
};

export { getBoard, editBoard };
