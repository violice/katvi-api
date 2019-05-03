import express from 'express';

import { getBoards, getBoard } from 'controllers/board';

const boardRouter = express.Router();

boardRouter.get('/', getBoards);
boardRouter.get('/:id', getBoard);

export default boardRouter;
