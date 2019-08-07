const path = require('path');

const loaders = require('./webpack.loaders');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/index.js'],
  },
  module: {
    rules: loaders,
  },
  // resolve: {
  //   extensions: ['.js', '.jsx'],
  //   // modules: [
  //   //   // path.resolve(__dirname, './node_modules'),
  //   //   // 'node_modules',
  //   //   path.join(__dirname, 'src'),
  //   //   path.join(__dirname, 'node_modules'),
  //   // ],
  //   alias: {
  //     'react-dom': '@hot-loader/react-dom',
  //   },
  // },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};
