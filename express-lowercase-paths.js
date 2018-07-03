var url = require("url")

module.exports = function lowercasePaths(opts) {
  var _opts = opts || {}
  return function _lowercasePaths(req, res, next) {
    if (req.path.toLowerCase() !== req.path) {
      var parsedUrl = url.parse(req.originalUrl)
      parsedUrl.pathname = parsedUrl.pathname.toLowerCase()
      res.redirect(_opts.redirectStatusCode || 302, url.format(parsedUrl))
    } else {
      next()
    }
  }
}
