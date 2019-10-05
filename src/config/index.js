const config = {
  env: process.env.NODE_ENV || "development",
  OPTION: {
    GET: {
      method: "GET"
    },
    POST: {
      method: "POST"
    },
    PUT: {
      method: "PUT"
    },
    DELETE: {
      method: "DELETE"
    }
  }
};

let envConfig;

try {
  if (config.env === "test") {
    config.env = "testing";
  }
  // eslint-disable-next-line
  envConfig = require(`./${config.env}`).default;
} catch (e) {
  envConfig = {};
}

export default Object.assign({}, config, envConfig);
