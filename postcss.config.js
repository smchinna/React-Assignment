const mqpacker = require('css-mqpacker');
const cssNext = require('postcss-cssnext');
const nano = require('cssnano');

module.exports = {
  plugins: [
    mqpacker,
    cssNext,
    nano,
  ],
};
