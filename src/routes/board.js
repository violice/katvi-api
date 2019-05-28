import express from 'express';

import { getBoard, editBoard } from 'controllers/board';

const boardRouter = express.Router();

boardRouter.get('/:id', getBoard);
boardRouter.patch('/:id', editBoard);

export default boardRouter;
