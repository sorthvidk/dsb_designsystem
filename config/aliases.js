const paths = require("./paths");

/**
 * Alias
 * 
 * Globally available alias object,
 * shared with both Storybook and projects Webpack
 * 
 * note: need to build files to resolve paths importing files
 */
module.exports = {
  Components: paths.components,
  Styles: paths.styles,
  Images: paths.images,
  Svg: paths.svgs,
};
