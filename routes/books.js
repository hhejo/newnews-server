import { Router } from 'express';
import { TTB_KEY } from '../env.mjs';
import { getBooksNew, getBook } from '../controllers/books.controller.js';

const router = Router();

// GET /api/books/new
router.get('/new', getBooksNew);
// GET api/books/:isbn13
router.get('/:isbn13', getBook);

export default router;
