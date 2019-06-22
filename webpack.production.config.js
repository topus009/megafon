var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

loaders.push({
  test: /\.(sass|scss)$/,
  loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader?sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded'}),
  exclude: ['node_modules']
});

module.exports = {
  entry: [
    './src/index.js',
  ],
  // entry: {
  //   app: './src/index.js',
  // },
  // mode: 'development',
  output: {
    publicPath: './',
    path: path.join(__dirname, 'public'),
    filename: '[chunkhash].js'
    // filename: 'js/[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'styles': path.resolve(__dirname, 'src/styles/'),
    },
    // symlinks: false,
  },
  module: {
    loaders,
  },
  stats: {
    colors: true,
    modules: false,
    version: false,
    // hash: false,
    excludeAssets: [/fonts/, /images/],
    children: false,
    assets: false,
    performance: false,
    // excludeModules: source => source && !source.indexOf('webpack-dev-server/client/index.js') >= 0,
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
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      parallel: true,
      output: {
        comments: false,
      },
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      files: {
        css: ['style.css'],
        js: ['bundle.js'],
      }
    })
  ],
};
