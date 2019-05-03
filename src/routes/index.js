import express from 'express';

import userRouter from './user';
import authRouter from './auth';
import projectRouter from './project';
import boardRouter from './board';

const apiRouter = express.Router();

apiRouter.use('/', authRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/project', projectRouter);
apiRouter.use('/board', boardRouter);

export default apiRouter;
