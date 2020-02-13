import './styles/index.scss'


// idea (psuedo code):

/**
 * Import all files matching '.js' pattern.
 * 
 * To dynamically create import/export,
 * without having to manually specify them.
 * 
 * note:
 * exports has to be avaiable as is,
 * without any compiling. can this be done?
 */

// https://webpack.js.org/guides/dependency-management/:


const cache = {}

function importAll(r) {
    r.keys().forEach(key => cache[key] = r(key))
}

// get all js-files from src folder: (exclude .html and .stories)
importAll(require.context("./components/", true, /^(?!.*(?:html.js|stories.js$)).*\.js$/))

// export them:
export { cache }