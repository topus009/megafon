const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const loaders = require('./webpack.loaders');

loaders.push({
  test: /\.(sass|scss)$/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader?sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded',
  }),
  exclude: ['node_modules'],
});

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    publicPath: './',
    path: path.join(__dirname, 'public'),
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      styles: path.resolve(__dirname, 'src/styles/'),
      'react-dom': '@hot-loader/react-dom',
    },
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
    // assets: false,
    performance: false,
    // excludeModules: source => source && !source.indexOf('webpack-dev-server/client/index.js') >= 0,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: m => /node_modules/.test(m.context),
    }),
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
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
        drop_debugger: true,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      files: {
        css: ['style.css'],
        js: ['[name].[chunkhash].js'],
      },
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: true,
    }),
  ],
};
