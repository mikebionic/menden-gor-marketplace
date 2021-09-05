const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
    tailwindcss,
    'postcss-preset-env'
  ]
}
