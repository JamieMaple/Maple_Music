module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-cssnext')({
      features: {
        customProperties: {
          variables: require('./src/css-varialbes')
        },
        autoprefixer: false,
        rem: false
      }
    }),
    require('postcss-nested'),
  ]
}