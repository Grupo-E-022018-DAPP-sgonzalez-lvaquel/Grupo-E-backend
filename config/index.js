import baseConfig from './baseConfig';

const envConfig = require('./' + process.env.NODE_ENV).default;

export default {...baseConfig, ...envConfig};
