const path = require('path')

module.exports = {
  src: path.resolve(__dirname, "../src"), // source files
  build: path.resolve(__dirname, "../dist"), // production build files
  static: path.resolve(__dirname, "../public"), // static files to copy to build folder

  components: path.resolve(__dirname, "../src/components/"),
  styles: path.resolve(__dirname, "../src/styles/"),
  images: path.resolve(__dirname, "../static/images/"),
};
