// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-cursos-js": () => import("./../src/pages/cursos.js" /* webpackChunkName: "component---src-pages-cursos-js" */),
  "component---src-pages-embarazo-js": () => import("./../src/pages/embarazo.js" /* webpackChunkName: "component---src-pages-embarazo-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-postparto-js": () => import("./../src/pages/postparto.js" /* webpackChunkName: "component---src-pages-postparto-js" */)
}

