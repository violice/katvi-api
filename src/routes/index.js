import express from 'express';

import authRouter from './auth';
import boardRouter from './board';
import cardRouter from './card';
import projectRouter from './project';
import userRouter from './user';

const apiRouter = express.Router();

apiRouter.use('/', authRouter);
apiRouter.use('/board', boardRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/project', projectRouter);
apiRouter.use('/card', cardRouter);

export default apiRouter;
