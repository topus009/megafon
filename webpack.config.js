'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const loadersConf = require('./webpack.loaders');
const config = require('./config.local');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HOST = process.env.HOST || config.host;
const PORT = process.env.PORT || config.port;

module.exports = {
    entry: [
    // POLYFILL: Set up an ES6-ish environment
        'babel-polyfill', // The entire babel-polyfill
        './src/index.js' // your app's entry point
    ],
    devtool: 'cheap-module-eval-source-map',
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: loadersConf
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'node_modules') // the old 'fallback' option (needed for npm link-ed packages)
        ],
        alias: {
            'styles': path.resolve(__dirname, 'styles/')
        }
    },
    devServer: {
        contentBase: './public',
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST,
        stats: {
            colors: true,
            modules: false,
            version: false,
            hash: false,
            excludeAssets: [/fonts/],
            children: false,
            assets: false
        }
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        }),
        new FaviconsWebpackPlugin('./src/images/favicon.png'),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            files: {
                css: ['style.css'],
                js: ['bundle.js']
            }
        })
    ]
};
