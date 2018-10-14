import baseConfig from './baseConfig';

let envConfig;

try {
    envConfig = require('./' + process.env.NODE_ENV).default;
} catch (e) {
    envConfig = require('./development').default;
}

export default Object.assign({}, baseConfig, envConfig);
