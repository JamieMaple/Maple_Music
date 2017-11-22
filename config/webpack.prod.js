const merge = require('webpack-merge')
const webpack = require('webpack')
const ExtraPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.config')

module.exports = merge(common, {
  entry: {
    app: './src/index',
    vendor: ['react', 'react-dom']
  },
  node: {
    __dirname: false,
    __filename: false
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
    new ExtraPlugin('css/main.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new UglifyJsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtraPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                module: true,
                minimize: true
              }
            },
            'postcss-loader'
          ]
        })
      },
    ]
  }
})
