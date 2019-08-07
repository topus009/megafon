const { resolve } = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin  } = require('clean-webpack-plugin');

const common = require('./webpack.common');

const STATIC = resolve(
  __dirname,
  '..', // [src]
  'public'
);

module.exports = () => {
  return {
    ...common,
    mode: 'production',
    output: {
      filename: 'js/[name].[hash].js',
      publicPath: '/public',
      path: STATIC,
    },
    performance: { hints: false },
    devtool: false,
    // optimization: {
    //   // minimizer: [
    //   //   new TerserPlugin({
    //   //     cache: true,
    //   //     parallel: true,
    //   //     sourceMap: false,
    //   //     terserOptions: {
    //   //       output: { comments: false },
    //   //       compress: { drop_console: true },
    //   //     },
    //   //   }),
    //   // ],
    //   splitChunks: {
    //     // chunks: 'async',
    //     automaticNameDelimiter: '.',
    //     cacheGroups: {
    //       vendor: {
    //         name: 'vendors',
    //         filename: 'vendors.[hash].js',
    //         chunks: chunk => chunk.name === 'main',
    //         test: module => /[\\/]node_modules[\\/]/.test(module.context),
    //         // chunks: 'all',
    //         // reuseExistingChunk: true,
    //         // priority: 1,
    //         // minChunks: 1,
    //         // minSize: 0,
    //       },
    //     },
    //   },
    //   occurrenceOrder: true,
    // },
    plugins: [
      new HtmlWebpackPlugin({
        filename: '../public/index.html',
        template: './src/template.html',
        title: 'Megafon',
      }),
      new MiniCssExtractPlugin({
        filename: 'css/styles.[hash].css',
      }),
      // new BundleAnalyzerPlugin({
      //   analyzerMode: 'static',
      //   generateStatsFile: true,
      //   // reportFilename: `${DEST}/${PRJ_NAME}-bundle-report.html`,
      //   // mode: "standalone",
      //   // port: 4040,
      //   // open: true,
      //   // watchModeOnly: false,
      // }),
      new LodashModuleReplacementPlugin({
        cloning: true,
        collections: true,
        metadata: true,
      }),
      // new BabelMinifyPlugin({
      //   // minify options are passed on to babel-preset-minify
      //   removeConsole: true,
      // }, {
      //   // Default: /^\**!|@preserve|@license|@cc_on/
      //   // falsy value to remove all comments.
      //   comments: false,
      //   sourceMap: true,
      // }),
      new webpack.DefinePlugin({ PRODUCTION: true }),
      new CleanWebpackPlugin({
        root: STATIC,
        verbose: true,
        dry: false,
        cleanOnceBeforeBuildPatterns: ['js/*.*', 'css/*.*'],
      }),
    ],
  };
};
