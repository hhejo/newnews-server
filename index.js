import express from 'express';
import cors from 'cors';
// Swagger
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './swagger/swagger-docs.js';
// Routes
import booksRouter from './routes/books.js';
import searchRouter from './routes/search.js';

const app = express();
const port = process.env.PORT || 3000;

function init() {
  app.use(cors());

  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  app.use('/api/books', booksRouter);
  app.use('/api/search', searchRouter);

  app.listen(port, () =>
    console.log(
      `App listening on port ${port}, Swagger docs available at http://localhost:${port}/api-docs`
    )
  );
}

init();
