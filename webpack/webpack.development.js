const { resolve } = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common');
const config = require('../config.local');

const HOST = process.env.HOST || config.host;
const PORT = process.env.PORT || config.port;
// const PROXY = `http://${HOST}:${PORT}`;

const STATIC = resolve(
  __dirname,
  '..', // [src]
  'public'
);

module.exports = () => {
  return {
    ...common,
    mode: 'development',
    output: {
      filename: 'js/bundle.js',
      publicPath: '/',
      // path: STATIC,
      path: '/dist',
      pathinfo: true,
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      port: PORT,
      host: HOST,
      contentBase: STATIC,
      // hot: true,
      // inline: true,
      historyApiFallback: true,
      // headers: { 'Access-Control-Allow-Origin': '*' },
      // overlay: true,
      // stats: {
      //   assets: true,
      //   children: false,
      //   chunks: false,
      //   hash: false,
      //   modules: false,
      //   publicPath: false,
      //   timings: true,
      //   version: false,
      //   warnings: true,
      //   optimizationBailout: true,
      //   colors: {
      //     green: '\u001b[32m',
      //   },
      // },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/template.html',
        files: {
          css: ['style.css'],
          js: ['bundle.js'],
        },
      }),
      new MiniCssExtractPlugin({
        filename: 'css/styles.css',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
};
