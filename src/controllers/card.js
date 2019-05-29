import { prisma } from 'generated/prisma-client';

const fragment = `
  fragment CardWithColumn on Card {
    id
    column {
      id
    }
    priority
    type
    name
    description
  }
`;

const createCard = async (req, res) => {
  try {
    const {
      body: {
        name,
        description,
        type,
        priority,
        column,
      },
    } = req;
    const card = await prisma.createCard({
      name,
      description,
      type,
      priority,
      column: {
        connect: {
          id: column.id,
        },
      },
    }).$fragment(fragment);
    res.status(200).json(card);
  } catch (e) {
    res.status(422).json({ error: e.message, raw: e });
  }
};

export { createCard };
