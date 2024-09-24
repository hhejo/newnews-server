import express from 'express';
import booksRouter from './routes/books.js';

const app = express();
const port = 3000;

app.use('/api/books', booksRouter);

app.listen(port, () => console.log(`App listening on port ${port}`));
