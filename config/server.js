const webpack = require('webpack')
const express = require('express')

const DevMiddleware = require('webpack-dev-middleware')
const HotMiddleware = require('webpack-hot-middleware')

const app = express()
const config = require('./webpack.dev')

const PORT = 8080

const compiler = webpack(config)

app.use(DevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  quiet: true
}))

app.use(HotMiddleware(compiler, {
  log: false
}))

app.listen(PORT, () => {
  console.log('> Starting server...')
})