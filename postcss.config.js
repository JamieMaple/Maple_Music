module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-cssnext')({
      features: {
        autoprefixer: false,
        rem: false
      }
    }),
    require('postcss-nested')
  ]
}