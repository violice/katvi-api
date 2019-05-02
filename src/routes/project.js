import express from 'express';

import { getProjects, getProject, createProject } from 'controllers/project';

const projectRouter = express.Router();

projectRouter.get('/', getProjects);
projectRouter.get('/:id', getProject);
projectRouter.post('/', createProject);

export default projectRouter;
