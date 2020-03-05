/**
 * SCSS
 *
 * All styling
 */
import "./styles/index.scss";

/**
 * Import SVG
 */
import {default as upArrow} from "./../static/svg/up-arrow.svg";

/**
 * Import Components
 */
export { default as Spinner } from "./components/spinner/spinner";
export { default as Heading1 } from "./components/headline-1/headline-1";
export { default as Heading2 } from "./components/headline-2/headline-2";
export { default as Hero } from "./components/hero/hero";

/**
 * Export Components
 *
 * To be available to outside projects
 */
export {
  // SVG
  upArrow,

  // Components
  Spinner,
  Heading1,
  Heading2,
  Hero
};

// // idea (psuedo code):

// // https://webpack.js.org/guides/dependency-management/:

// const cache = {}
// const exportObj = {}

// function importAll(r) {
//     r.keys().forEach(key => cache[key] = r(key))
// }

// function exportAll(r) {
//     r.keys().forEach((key, i) => exportObj['key' + i] = r(key))
// }

// // get all js-files from src folder: (exclude .html.js and .stories.js)
// const jsFiles = require.context("./components/", true, /^(?!.*(?:html.js|stories.js$)).*\.js$/)

// importAll(jsFiles)
// exportAll(jsFiles)

// console.log('// dsb_designsystem: export default ', exportObj)

// // export them:
// export default exportObj
