"use strict";
var path = require('path');
module.exports = {
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
        // compress: true,
        port: 9000,
        hot: true,
    },
    entry: {
        game: './src/index.ts',
        login: './src/MenuManager/login.ts',
        websocket: './src/WebSocketClient/websocket.ts',
        test: './src/Test/test.ts'
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
        // minimize: true
    }
};