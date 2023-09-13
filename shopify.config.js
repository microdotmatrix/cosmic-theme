const { author, name, version } = require('./package.json');

module.exports = {
  development: {
    SHOPIFY_CLI_THEME_TOKEN: process.env.SHOPIFY_CLI_THEME_TOKEN,
    SHOPIFY_FLAG_STORE: process.env.SHOPIFY_FLAG_STORE,
    SHOPIFY_FLAG_PATH: '.',
  },
  test: {
    SHOPIFY_CLI_THEME_TOKEN: process.env.SHOPIFY_CLI_THEME_TOKEN,
    SHOPIFY_FLAG_STORE: process.env.SHOPIFY_FLAG_STORE,
    SHOPIFY_FLAG_THEME_ID: `${author}/${name}-test@${version}`,
    SHOPIFY_FLAG_PATH: '.',
  },
  production: {
    SHOPIFY_FLAG_THEME_ID: `${author}/${name}@${version}`,
    SHOPIFY_FLAG_PATH: '.',
  },
};
