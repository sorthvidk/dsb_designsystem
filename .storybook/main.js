const path = require('path');
const custom = require('../config/webpack.dev');
const alias = require('../config/resolve-alias');

module.exports = {
  /**
   * Stories
   *
   * Where to look for files
   */
  stories: ["../src/**/*.stories.js"],
  /**
   * Addons
   *
   * Register the addons to our storybook-setup.
   */
  addons: [
    /**
     * Knobs
     *
     * Allow you to edit props dynamically using the Storybook UI.
     */
    "@storybook/addon-knobs/register",
    /**
     * HTML
     *
     * Extracts and displays compiled syntax-highlighted HTML.
     */
    "@whitespace/storybook-addon-html/register",
    /**
     * A11Y
     *
     * Can be helpful to make your UI components more accessible.
     */
    "@storybook/addon-a11y/register",
    /**
     * Viewport
     *
     * Display your stories in different sizes and layouts in Storybook.
     */
    "@storybook/addon-viewport/register",
  ],
  /**
   * Webpack Final
   *
   * Merge with the rest of Storybooks default Webpack config.
   */
  webpackFinal: config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        /**
         * Alias
         * 
         * Include the global Webpack alias object
         */
        alias
      },
      module: {
        ...config.module,
        rules: custom.module.rules
      }
    };
  }
};
