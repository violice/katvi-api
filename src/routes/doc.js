import express from 'express';

import {
  getDocs,
  createDoc,
  editDoc,
} from 'controllers/doc';

const docRouter = express.Router();

docRouter.get('/', getDocs);
docRouter.post('/', createDoc);
docRouter.patch('/:id', editDoc);

export default docRouter;
