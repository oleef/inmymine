const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD
} = require("next/constants");

module.exports = phase => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isSer = phase === PHASE_PRODUCTION_BUILD;
  const env = {
    APP_DOMAIN: (() => {
      if (isDev) return "http://localhost:3000";
      if (isSer) return "http://www.inmymine.com";
    })(),
    API_DOMAIN: (() => {
      return "https://jsonplaceholder.typicode.com";
    })()
  };
  return {
    env
  };
};
