import express from 'express';

import {
  createCard,
} from 'controllers/card';

const cardRouter = express.Router();

cardRouter.post('/', createCard);

export default cardRouter;
