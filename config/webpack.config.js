const webpack = require('webpack')
const NyanProgressPlugin = require('nyan-progress-webpack-plugin')
const HappPack = require('happypack')
const ExtractPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

function resolve(...dirs) {
  return path.resolve(__dirname, '..', dirs.join('/'))
}

module.exports = {
  node: {
    net: "empty",
    tls: "empty",
    fs: "empty"
  },
  output: {
    path: resolve('app', 'build'),
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx','.json'],
    alias: {
      components: resolve('src', 'components'),
      utils: resolve('src', 'utils'),
      API: resolve('src', 'API'),
      actions: resolve('src', 'store', 'actions'),
      commonTypes: resolve('src', 'commonTypes'),
    }
  },
  plugins: [
    new NyanProgressPlugin({
      debounceInterval: 180,
      nyanCatSays(progress, messages) {
        if (progress === 1) {
          return "Maple! Done!!"
        }
        return 'waiting...'
      }
    }),
    new HappPack({
      id: 'jsx',
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
        'eslint-loader'
      ]
    }),
    new HappPack({
      id: 'styles',
      loaders: isDev
      ? [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            module: true,
            minimize: isDev ? false : true,
            localIdentName: isDev
            ? '[name]__[local]__[hash:base64:5]'
            : '[hash:base64]',
          }
        },
        'postcss-loader'
      ]
      : [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            module: true,
            minimize: isDev ? false : true,
            localIdentName: isDev
            ? '[name]__[local]__[hash:base64:5]'
            : '[hash:base64]',
          }
        },
        'postcss-loader'
      ]
    }),
    isDev ? () => {} : new ExtractPlugin('main.css')
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'tslint-loader',
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            useCache: true,
            usePrecompiledFiles: true
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'happypack/loader?id=jsx'
      },
      {
        test: /\.(css|scss)$/,
        use: isDev
        ? 'happypack/loader?id=styles'
        : ExtractPlugin.extract({
          fallback: 'style-loader',
          use: 'happypack/loader?id=styles'
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
        test: /\.(ttf|eot|woff|woff2|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]-[hash:base64:5].[ext]',
            outputPath: 'fonts/'
          }
        }
      }
    ]
  }
}
