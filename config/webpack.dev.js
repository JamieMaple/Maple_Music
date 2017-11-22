const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrorPlugin = require('friendly-errors-webpack-plugin')
const ExtraPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.config')

const { PORT } = require('./common')

const URL = `http://localhost:${PORT}/`

module.exports = merge(common, {
  entry: {
    app: ['react-hot-loader/patch', `webpack-hot-middleware/client?path=${URL}__webpack_hmr&noInfo=true&reload=true`, './src/index']
  },
  output: {
    filename: 'bundle.js',
    publicPath: URL
  },
  plugins: [
    new ExtraPlugin('main.css'),
    new FriendlyErrorPlugin({
      clearConsole: true,
      compilationSuccessInfo: {
        messages: ["> Local running on: http://localhost:8080"]
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify("development")
      }
    })
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
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            },
            'postcss-loader'
          ]
        })
      },
    ]
  }
})