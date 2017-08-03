var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')(global._program.app);
console.log(baseWebpackConfig);
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env,
      LOCAL_ROOT: 'http://115.28.110.211:3001/'
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      title: '吉林市电子政务平台',
      statics: {
        base: 'http://static.thewallet.com.cn'
      },
      filename: 'index.html',
      template: './static/html/'+ global._program.html +'.html',
      inject: true
    }),
    // new HtmlWebpackPlugin({
    //   title: 'A',
    //   files: {
    //     css: [ "/remark/global/css/bootstrap.min.css" ]
    //   },
    //   filename: 'index.html',
    //   // template: './static/html/main1.html',
    //   inject: true
    // }),
    new FriendlyErrorsPlugin()
  ]
})
