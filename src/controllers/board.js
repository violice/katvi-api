import { prisma } from 'generated/prisma-client';

const getBoards = async (req, res) => {
  try {
    const { query: { projectId } } = req;
    const boards = await prisma.boards({
      where: {
        project: {
          id: projectId,
        },
      },
    });
    res.status(200).json(boards);
  } catch (e) {
    res.status(422).json({
      error: e.message,
      raw: e,
    });
  }
};

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

export { getBoards, getBoard };
