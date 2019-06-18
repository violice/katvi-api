import express from 'express';

import {
  getCard,
  createCard,
  editCard,
  getMyCards,
} from 'controllers/card';

const cardRouter = express.Router();

cardRouter.get('/:id', getCard);
cardRouter.post('/', createCard);
cardRouter.patch('/:id', editCard);
cardRouter.get('/my', getMyCards);

export default cardRouter;
