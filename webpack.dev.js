"use strict";
var path = require('path');
var { merge } = require('webpack-merge');
var common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: [{
            directory: path.resolve(__dirname, 'dist'),
        },
        {
            directory: path.resolve(__dirname, 'assets'),
            publicPath: '/assets'
          },
          {
            directory: path.resolve(__dirname, 'fonts'),
            publicPath: '/fonts'
          },
        ],
        compress: true,
        port: 9000,
        hot: true,
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
});