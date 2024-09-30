
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-account-page-js": preferDefault(require("/Users/georgioua/Projects/ShareSearch-React/src/pages/account_page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/georgioua/Projects/ShareSearch-React/src/pages/index.js")),
  "component---src-pages-my-stocks-js": preferDefault(require("/Users/georgioua/Projects/ShareSearch-React/src/pages/my_stocks.js")),
  "component---src-pages-profile-page-js": preferDefault(require("/Users/georgioua/Projects/ShareSearch-React/src/pages/profile_page.js"))
}

