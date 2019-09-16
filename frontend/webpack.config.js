const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../backend/static'),
    filename: 'script.js',
  },
  module: {
    rules: [
    ],
  },
};
