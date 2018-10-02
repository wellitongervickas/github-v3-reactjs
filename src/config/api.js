//https://developer.github.com/v3

const api = {
  development: 'https://api.github.com/v3',
  production: 'https://api.github.com/v3',
};

const define = env => {
  switch (env) {
    case 'development':
      return api.development

    case 'production':
      return api.production

    default:
      return api.production
  }
};

export default {
  environment: process.env.REACT_APP_STAGE,
  url: define(process.env.REACT_APP_STAGE),
};
