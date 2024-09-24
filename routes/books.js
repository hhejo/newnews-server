import { Router } from 'express';
import { getBooksNew, getBook } from '../controllers/books.controller.js';

const router = Router();

router.get('/new', getBooksNew);
router.get('/:isbn13', getBook);

export default router;
