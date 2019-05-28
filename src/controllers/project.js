import { prisma } from 'generated/prisma-client';

const accessFragment = `
  fragment AccessibleProjects on Access {
    id
    permissions
    project {
      id
      name
      description
      user {
        id
        email
        username
        firstName
        lastName
      }
    }
  }
`;

const projectFragment = `
  fragment ProjectPopulate on Project {
    id
    name
    description
    boards {
      id
      name
    }
  }
`;

const getProjects = async (req, res) => {
  try {
    const { headers: { user } } = req;
    const accesses = await prisma.accesses({
      where: {
        user: {
          id: user.id,
        },
      },
    }).$fragment(accessFragment);
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
      const project = await prisma.project({ id }).$fragment(projectFragment);
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
    const {
      body: {
        name,
        description,
        boardName,
        boardDescription,
      }, headers: { user },
    } = req;
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
      name: boardName,
      description: boardDescription,
    });
    res.status(200).json(project);
  } catch (e) {
    res.status(422).json({ error: e.message, raw: e });
  }
};

const editProject = async (req, res) => {
  try {
    const { params: { id }, body: { name, description } } = req;
    const project = await prisma.updateProject({ where: { id }, data: { name, description } });
    res.status(200).json(project);
  } catch (e) {
    res.status(422).json({
      error: e.message,
      raw: e,
    });
  }
};

export {
  getProjects,
  getProject,
  createProject,
  editProject,
};
