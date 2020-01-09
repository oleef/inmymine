const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD
} = require("next/constants");

module.exports = phase => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const env = {
    APP_DOMAIN: (() => {
      if (isDev) return "http://localhost:3000";
    })(),
    API_DOMAIN: (() => {
      if (isDev) return "https://jsonplaceholder.typicode.com";
    })()
  };
  return {
    env
  };
};
