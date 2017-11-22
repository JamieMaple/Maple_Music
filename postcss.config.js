module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-cssnext'),
    require('postcss-nested')
  ]
}