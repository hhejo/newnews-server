import { Router } from 'express';
import { getBooks, getBook } from '../controllers/books/books.controller.js';

const router = Router();

// /**
//  * @swagger
//  * /api/books/new:
//  *   get:
//  *     summary: Create a new book
//  *     response:
//  *       200:
//  *         description: Book created
//  */
router.get('', getBooks);

// /**
//  * @swagger
//  * /api/books/{isbn13}:
//  *   get:
//  *     summary: Retrieve a book by ISBN13
//        parameters:
//  *       - in: path
//            name: isbn13
//            required: true
//            description: ISBN13 of the book to retrieve
//            schema:
//              type: string
//  *     response:
//  *       200:
//  *         description: Book details
//  */
router.get('/:isbn13', getBook);

export default router;
