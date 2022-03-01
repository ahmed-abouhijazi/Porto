const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/reedp/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
            includePaths: [
                path.resolve(__dirname, './node_modules/compass-mixins/lib')
            ]
          }
      }
    }
  }
}