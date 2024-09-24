import express from 'express';
import cors from 'cors';
import booksRouter from './routes/books.js';
import searchRouter from './routes/search.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/api/books', booksRouter);
app.use('/api/search', searchRouter);

app.listen(port, () => console.log(`App listening on port ${port}`));
