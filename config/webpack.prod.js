const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.config')

module.exports = merge(common, {
  entry: {
    app: './src/index',
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: 'js/[name].js',
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new WebpackBundleAnalyzer({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: 'report.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: true
    }),
  ],
})
