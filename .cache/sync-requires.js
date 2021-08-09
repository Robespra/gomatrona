const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/UXPAGES/Apps/gomatrona/src/pages/404.js"))),
  "component---src-pages-cursos-js": hot(preferDefault(require("/Users/UXPAGES/Apps/gomatrona/src/pages/cursos.js"))),
  "component---src-pages-embarazo-js": hot(preferDefault(require("/Users/UXPAGES/Apps/gomatrona/src/pages/embarazo.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/UXPAGES/Apps/gomatrona/src/pages/index.js"))),
  "component---src-pages-postparto-js": hot(preferDefault(require("/Users/UXPAGES/Apps/gomatrona/src/pages/postparto.js")))
}

