const path = require('path');
const custom = require('../config/webpack.dev');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-knobs/register',
    '@whitespace/storybook-addon-html/register',
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: custom.module.rules
      }
    };
  }
};
