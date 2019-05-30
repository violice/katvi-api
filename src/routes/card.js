import express from 'express';

import {
  getCard,
  createCard,
} from 'controllers/card';

const cardRouter = express.Router();

cardRouter.get('/:id', getCard);
cardRouter.post('/', createCard);

export default cardRouter;
