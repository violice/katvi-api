import { prisma } from 'generated/prisma-client';

const fragment = `
  fragment AccessibleProjects on Access {
    id
    permissions
    project {
      id
      name
      description
    }
  }
`;

const getProjects = async (req, res) => {
  try {
    const { headers: { user } } = req;
    console.log(user);
    console.log(user.id);
    const accesses = await prisma.accesses({
      where: {
        user: {
          id: user.id,
        },
      },
    }).$fragment(fragment);
    res.status(200).json(accesses.map(access => ({
      ...access.project,
      permissions: access.permissions,
    })));
  } catch (e) {
    res.status(422).json({
      error: e.message,
      raw: e,
    });
  }
};

const getProject = async (req, res) => {
  try {
    const { params: { id }, headers: { user } } = req;
    const [access] = await prisma.accesses({
      where: {
        user: {
          id: user.id,
        },
        project: {
          id,
        },
      },
    });
    if (access) {
      const project = await prisma.project({ id });
      return res.status(200).json({ ...project, permissions: access.permissions });
    }
    res.status(422).json(null);
  } catch (e) {
    res.status(422).json({
      error: e.message,
      raw: e,
    });
  }
};

const createProject = async (req, res) => {
  try {
    const { body: { name, description }, headers: { user } } = req;
    const project = await prisma.createProject({
      name,
      description,
      user: {
        connect: {
          id: user.id,
        },
      },
    });
    await prisma.createAccess({
      project: {
        connect: {
          id: project.id,
        },
      },
      user: {
        connect: {
          id: user.id,
        },
      },
      permissions: {},
    });
    await prisma.createBoard({
      project: {
        connect: {
          id: project.id,
        },
      },
      name: 'Default Board',
    });
    res.status(200).json({ project });
  } catch (e) {
    res.status(422).json({ error: e.message, raw: e });
  }
};

export { getProjects, getProject, createProject };
