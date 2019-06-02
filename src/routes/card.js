import express from 'express';

import {
  getCard,
  createCard,
  getMyCards,
} from 'controllers/card';

const cardRouter = express.Router();

cardRouter.get('/my', getMyCards);
cardRouter.get('/:id', getCard);
cardRouter.post('/', createCard);

export default cardRouter;
