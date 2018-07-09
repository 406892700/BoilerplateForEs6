const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ], 
    devServer: {
        // proxy: { // proxy URLs to backend development server
        //   '/api': 'http://localhost:3000'
        // },
        contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: false, // only errors & warns on hot reload
        host: '0.0.0.0',
        port: 9003,
        // ...
    },
});
