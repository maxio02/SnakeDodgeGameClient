"use strict";
var path = require('path');

module.exports = {
    entry: {
        game: './src/index.ts',
        login: './src/MenuManager/login.ts',
        websocket: './src/WebSocketClient/websocket.ts',
        test: './src/Test/test.ts'
    },
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
};