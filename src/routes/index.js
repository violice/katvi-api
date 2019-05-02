import express from 'express';

import userRouter from './user';
import authRouter from './auth';
import projectRouter from './project';

const apiRouter = express.Router();

apiRouter.use('/', authRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/project', projectRouter);

export default apiRouter;
