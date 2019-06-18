import { prisma } from 'generated/prisma-client';

const getDocs = async (req, res) => {
  try {
    const { headers: { user }, query: { project } } = req;
    const docs = await prisma.docs({
      where: {
        user: {
          id: user.id,
        },
        project: {
          id: project,
        },
      },
    });
    res.status(200).json(docs);
  } catch (e) {
    res.status(422).json({
      error: e.message,
      raw: e,
    });
  }
};

const createDoc = async (req, res) => {
  try {
    const {
      body: {
        name,
        content,
        project,
      }, headers: { user },
    } = req;
    const doc = await prisma.createDoc({
      name,
      content,
      user: {
        connect: {
          id: user.id,
        },
      },
      project: {
        connect: {
          id: project,
        },
      },
    });
    res.status(200).json(doc);
  } catch (e) {
    res.status(422).json({ error: e.message, raw: e });
  }
};

const editDoc = async (req, res) => {
  try {
    const { params: { id }, body: { name, content } } = req;
    const doc = await prisma.updateDoc({ where: { id }, data: { name, content } });
    res.status(200).json(doc);
  } catch (e) {
    res.status(422).json({
      error: e.message,
      raw: e,
    });
  }
};

export {
  getDocs,
  createDoc,
  editDoc,
};
