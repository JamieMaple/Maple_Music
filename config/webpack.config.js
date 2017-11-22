const HtmlWebpackPlugin = require('html-webpack-plugin')
const NyanProgressPlugin = require('nyan-progress-webpack-plugin')
const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, '..', 'app', 'build')
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx','.json']
  },
  plugins: [
    new NyanProgressPlugin({
      nyanCatSays(progress, messages) {
        if (progress === 1) {
          return "Maple! Done!!"
        } else {
          return "waiting..."
        }
      }
    }),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: {
          loader: 'tslint-loader',
          options: {
            typeCheck: true,
            emitErrors: true
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(jp?eg|png|gif|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:base64:5].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2|otf)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:base64:5].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  }
}
