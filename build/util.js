exports.cssLoaders = function (options) {
  

    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    return {

      // EDIT
      sass: generateLoaders('sass', { indentedSyntax: true, includePaths: [path.resolve(__dirname, '../node_modules/compass-mixins/lib')] }),
      scss: generateLoaders('sass', { includePaths: [path.resolve(__dirname, '../node_modules/compass-mixins/lib')] }),

    }
  }