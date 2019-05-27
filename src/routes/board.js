import express from 'express';

import { getBoards, getBoard, editBoard } from 'controllers/board';

const boardRouter = express.Router();

boardRouter.get('/', getBoards);
boardRouter.get('/:id', getBoard);
boardRouter.patch('/:id', editBoard);

export default boardRouter;
