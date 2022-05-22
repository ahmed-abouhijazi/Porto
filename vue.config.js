const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
},
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