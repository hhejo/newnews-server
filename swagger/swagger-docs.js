import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Newnews API',
    version: '1.0.0',
    description: 'API documentation for Newnews',
  },
  servers: [{ url: 'http://localhost:3000' }],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js', './docs/swagger/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
