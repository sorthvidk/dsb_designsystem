const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  webpackFinal: async (config, { configType }) => {

    /**
     * Styles
     *
     * Support .scss to be imported and read by Storybook
     */
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};