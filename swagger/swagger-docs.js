import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Books API',
    version: '1.0.0',
    description: 'API documentation for books routes',
  },
  servers: [{ url: 'http://127.0.0.1:3000' }],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js', './docs/swagger/*.js'], // routes 폴더에 있는 파일에서 Swagger 주석을 읽어옴
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
