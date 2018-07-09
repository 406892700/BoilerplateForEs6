const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

const isProd = process.env.NODE_ENV === 'development';

module.exports = {
  entry: [
    './lib/index.js',
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$|\.scss/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader?sourceMap',
          'css-loader?sourceMap',
          'resolve-url-loader?sourceMap',
          'sass-loader?sourceMap',
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /^node_modules$/,
        use: 'url-loader?limit=8192&context=client&name=[path][name].[ext]',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './lib/index.html',
      filename: './index.html',
      cache: true
    }),
    new cleanWebpackPlugin(
      'dist',
      {
        root: path.resolve('./'),
        // exclude: ['index.html'],
        verbose: false
      }
    )
  ]
}