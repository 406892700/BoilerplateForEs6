const path = require('path');
// const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: [
    path.resolve(__dirname, './lib/index.js'),
  ],
  output: {
    filename: isProd ? 'index.[chunkhash].js' : 'index.[hash:6].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.js$|\.jsx$/,
      use: ['babel-loader'],
    },
    {
      test: /\.css$|\.scss/,
      use: [
        isProd ? MiniCssExtractPlugin.loader : 'style-loader?sourceMap',
        'css-loader?sourceMap',
        'resolve-url-loader?sourceMap',
        'sass-loader?sourceMap',
      ],
    },
    {
      test: /\.less/,
      use: [
        isProd ? MiniCssExtractPlugin.loader : 'style-loader?sourceMap',
        'css-loader?sourceMap',
        'resolve-url-loader?sourceMap',
        'less-loader?sourceMap',
      ],
    },
    {
      test: /\.(png|jpeg|gif|jpeg)$/,
      exclude: /^node_modules$/,
      use: 'url-loader?limit=8192&context=client&name=[path][name].[ext]',
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-withimg-loader',
        },
      ],
    },
    {
      test: /\.vue$/,
      exclude: /^node_modules$/,
      use: 'vue-loader',
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './lib/index.html',
      filename: './index.html',
      cache: true,
    }),
    new CleanWebpackPlugin(
      'dist', {
        root: path.resolve('./'),
        // exclude: ['index.html'],
        verbose: false,
      }
    ),
    new VueLoaderPlugin(),
  ],
};
