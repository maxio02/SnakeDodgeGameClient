"use strict";
var path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        game: './src/index.ts',
        login: './src/MenuManager/login.ts'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimize: true
    }
};