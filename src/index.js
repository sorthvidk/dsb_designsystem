import "./styles/index.scss";

import Spinner from "./components/spinner/spinner";
import Heading1 from "./components/heading-1/heading-1";
import Heading2 from "./components/heading-2/heading-2";
import Hero from "./components/hero/hero";

export { Spinner, Heading1, Heading2, Hero };


// // idea (psuedo code):

// /**
//  * Import all files matching '.js' pattern.
//  * 
//  * To dynamically create import/export,
//  * without having to manually specify them.
//  * 
//  * note:
//  * exports has to be avaiable as is,
//  * without any compiling. can this be done?
//  */

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
// // const modules = jsFiles.keys().map(jsFiles)
// exportAll(jsFiles)

// console.log('// dsb_designsystem: export default ', exportObj)

// // export them:
// export default exportObj