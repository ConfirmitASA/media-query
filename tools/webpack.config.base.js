const name = require('../package.json').name;

module.exports = {
  entry: {
    js: './src/main.js',
  },
  output: {
    path: './dist',
    filename: name + '.bundle.js',
    libraryTarget: 'umd',

  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
    }],
  },
  resolve: {
    extensions: [
      '',
      '.js',
    ],
  },
};
