import YAML from 'yamljs';

const swaggerSpec = YAML.load('./docs/swagger.yaml');

export default swaggerSpec;
