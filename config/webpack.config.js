const HtmlWebpackPlugin = require('html-webpack-plugin')
const NyanProgressPlugin = require('nyan-progress-webpack-plugin')
const ExtraPlugin = require('extract-text-webpack-plugin')
const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  output: {
    path: resolve('build'),
    filename: '[name].[hash:5].js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx','.json']
  },
  plugins: [
    new ExtraPlugin('main.css'),
    new NyanProgressPlugin({
      debounceInterval: 60,
      nyanCatSays(progress, messages) {
        if (progress === 1) {
          return "Maple! Done!!"
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: true
    })
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
