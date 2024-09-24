import express from 'express';
import cors from 'cors';
import booksRouter from './routes/books.js';

const app = express();
const port = 3000;

app.use(cors());

app.use('/api/books', booksRouter);

app.listen(port, () => console.log(`App listening on port ${port}`));
