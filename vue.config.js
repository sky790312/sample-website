var path = require('path')
var webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          stylus: {
            import: [path.resolve(__dirname, './src/stylus/variables.styl'), path.resolve(__dirname, './src/stylus/extends.styl')]
          }
        }
      })
    ]
  }
}
