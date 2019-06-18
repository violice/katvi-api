import express from 'express';

import authRouter from './auth';
import boardRouter from './board';
import cardRouter from './card';
import docRouter from './doc';
import projectRouter from './project';
import userRouter from './user';

const apiRouter = express.Router();

apiRouter.use('/', authRouter);
apiRouter.use('/board', boardRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/project', projectRouter);
apiRouter.use('/card', cardRouter);
apiRouter.use('/doc', docRouter);

export default apiRouter;
