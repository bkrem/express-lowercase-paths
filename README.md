Very similar to the unmaintained project [express-uncapitalize](https://github.com/jamiesteven/express-uncapitalize), this middleware redirects any requests which contain uppercase chars to their lowercase forms. With two main changes from the original:

  1. Works with all utf-8 strings in paths
  1. Keeps query parameters intact

# Installation

    npm install express-lowercase-paths-with-status-code

# Usage

    var lowercasePaths = require("express-lowercase-paths-with-status-code")
    app.use(lowercasePaths())

# Options
## Redirecting with specific status code
To redirect with a specific status code, pass the `redirectStatusCode` option to the middleware:
```js
var lowercasePaths = require("express-lowercase-paths-with-status-code")
app.use(lowercasePaths({redirectStatusCode: 301}))
```
