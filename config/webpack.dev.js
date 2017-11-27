const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrorPlugin = require('friendly-errors-webpack-plugin')
const common = require('./webpack.config')

const { PORT } = require('./common')

const URL = `http://localhost:${PORT}/`

module.exports = merge(common, {
  entry: {
    app: ['react-hot-loader/patch', `webpack-hot-middleware/client?path=${URL}__webpack_hmr&noInfo=true&reload=true`, './src/index'],
  },
  output: {
    filename: 'bundle.js',
    publicPath: URL
  },
  plugins: [
    new FriendlyErrorPlugin({
      clearConsole: true,
      compilationSuccessInfo: {
        messages: [`> Local running on: ${URL}`],
        notes: ['> Webpack logs below:\n']
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify("development")
      }
    }),
  ],
})