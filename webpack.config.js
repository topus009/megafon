const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const loadersConf = require('./webpack.loaders');
const config = require('./config.local');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const HOST = process.env.HOST || config.host;
const PORT = process.env.PORT || config.port;
// const PROXY = `http://${HOST}:${PORT}`;

module.exports = {
  entry: [
    // 'babel-polyfill',
    './src/index.js',
  ],
  // entry: {
  //     app: './src/index.js',
  // },
  // mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    // filename: 'js/[name].[contenthash].js',
  },
  module: {
    rules: loadersConf,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules'), // the old 'fallback' option (needed for npm link-ed packages)
    ],
    alias: {
      styles: path.resolve(__dirname, 'src/styles/'),
    },
  },
  devServer: {
    contentBase: './public',
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST,
    stats: {
      colors: true,
      // modules: false,
      version: false,
      hash: false,
      // excludeAssets: [/fonts/, /images/],
      // children: false,
      // assets: false,
      performance: false,
      excludeModules: source => source && !source.indexOf('webpack-dev-server/client/index.js') >= 0,
      excludeAssets: source => {
        const excludedAccets = ['icons-', 'src/assets/fonts/', 'iconstats', 'hot-update'];
        let exclude = false;
        excludedAccets.forEach(item => {
          if (source.includes(item)) {
            exclude = true;
          }
        });
        return exclude;
      },
    },
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  // },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
    new FaviconsWebpackPlugin('./src/assets/images/favicon.png'),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      files: {
        css: ['style.css'],
        js: ['bundle.js'],
      },
    }),
    // new BrowserSyncPlugin(
    //     {
    //         host: HOST,
    //         port: PORT,
    //         proxy: PROXY
    //     }
    // )
  ],
};
