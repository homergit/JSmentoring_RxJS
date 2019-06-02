const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './index.js',
        path: path.resolve(__dirname, './dist'),
    },
    devServer: {
        compress: true,
        port: 1234
    },
    plugins: [
        new CopyPlugin([
            { from: './src/index.html' }
        ])
    ]
};
