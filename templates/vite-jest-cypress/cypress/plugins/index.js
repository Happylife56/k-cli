// eslint-disable-next-line import/no-extraneous-dependencies
const { startDevServer } = require('@cypress/vite-dev-server');

module.exports = (on, config) => {
  const viteConfig = {
    plugins: [],
  };
  on('dev-server:start', (options) => startDevServer({
    options,
    viteConfig,
  }));

  return config;
};
