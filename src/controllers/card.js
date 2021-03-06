import { prisma } from 'generated/prisma-client';

const getCardFragment = `
  fragment GetCardFragment on Card {
    id
    column {
      id
      name
    }
    user {
      id
      email
      username
      firstName
      lastName
    }
    priority
    type
    name
    description
    createdAt
    updatedAt
  }
`;

const createCardFragment = `
  fragment CreateCardFragment on Card {
    id
    column {
      id
      name
    }
    priority
    type
    name
    description
  }
`;

const getCard = async (req, res) => {
  try {
    const {
      params: {
        id,
      },
    } = req;
    const card = await prisma.card({ id }).$fragment(getCardFragment);
    res.status(200).json(card);
  } catch (e) {
    res.status(422).json({ error: e.message, raw: e });
  }
};

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
      headers: {
        user,
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
      user: {
        connect: {
          id: user.id,
        },
      },
    }).$fragment(createCardFragment);
    res.status(200).json(card);
  } catch (e) {
    res.status(422).json({ error: e.message, raw: e });
  }
};

const editCard = async (req, res) => {
  try {
    const {
      params: {
        id,
      },
      body: {
        name,
        description,
        column,
        priority,
        type,
      },
    } = req;
    const card = await prisma.updateCard({
      data: {
        name,
        description,
        priority,
        type,
        column: {
          connect: {
            id: column,
          },
        },
      },
      where: {
        id,
      },
    }).$fragment(createCardFragment);
    res.status(200).json(card);
  } catch (e) {
    res.status(422).json({ error: e.message, raw: e });
  }
};

const getMyCards = async (req, res) => {
  try {
    const {
      headers: {
        user,
      },
    } = req;
    const cards = await prisma.cards({
      where: {
        user: {
          id: user.id,
        },
      },
    }).$fragment(createCardFragment);
    res.status(200).json(cards);
  } catch (e) {
    res.status(422).json({ error: e.message, raw: e });
  }
};

export {
  getCard,
  createCard,
  editCard,
  getMyCards,
};
