const path = require('path');
const webpack = require('webpack'); // access to default plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'production', // default mode
    entry: {
        main: './index.js',
    }, // default entry
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'build'), // dist by default
    },
    resolve: {
        extensions: ['.js', '.json', '.png', '.xml'] // default files
    },
    module: { // Loaders
        rules: [{
            test: /\.css$/, // matches any name with .css extension
            use: ['style-loader', 'css-loader'], // reading from end
        }, {
            test: /\.xml$/,
            use: 'xml-loader'
        }, {
            test: /\.(png|jpg)$/,
            use: 'file-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new CleanWebpackPlugin(),
    ]
}
