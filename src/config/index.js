const headers = {
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
  mode: 'cors',
};
const config = {
  env: process.env.NODE_ENV || 'development',
  OPTION: {
    GET: {
      method: 'GET',
      ...headers,
    },
    POST: {
      method: 'POST',
      ...headers,
    },
    PUT: {
      method: 'PUT',
      ...headers,
    },
    DELETE: {
      method: 'DELETE',
      ...headers,
    },
  },
};

let envConfig;

try {
  if (config.env === 'test') {
    config.env = 'testing';
  }
  // eslint-disable-next-line
  envConfig = require(`./${config.env}`).default;
} catch (e) {
  envConfig = {};
}

export default Object.assign({}, config, envConfig);
