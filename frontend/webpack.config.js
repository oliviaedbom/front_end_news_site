const path = require('path');
const babel = require('./babel.config');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../backend/static'),
    filename: 'script.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: babel.exclude,
        use: {
          loader: 'babel-loader',
          options: {
            presets: babel.presets,
            plugins: babel.plugins,
          },
        },
      },
    ],
  },
};
