import express from 'express';

import {
  getProjects, getProject, createProject, editProject,
} from 'controllers/project';

const projectRouter = express.Router();

projectRouter.get('/', getProjects);
projectRouter.get('/:id', getProject);
projectRouter.post('/', createProject);
projectRouter.patch('/:id', editProject);

export default projectRouter;
