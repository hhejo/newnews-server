import { Router } from 'express';
import { getBooks, getBook } from '../controllers/books/books.controller.js';

const router = Router();

router.get('', getBooks);
router.get('/:isbn13', getBook);

export default router;
