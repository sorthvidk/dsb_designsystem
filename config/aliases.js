const paths = require("./paths");

/**
 * Alias
 * 
 * Globally available alias object,
 * shared with both Storybook and projects Webpack
 */
module.exports = {
  Components: paths.components,
  Styles: paths.styles,
  Images: paths.images,
  Svg: paths.svgs,
};
