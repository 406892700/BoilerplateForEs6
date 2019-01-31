const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.base.config');

const isProd = process.env.NODE_ENV === 'production'; // 是否是生产环境

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: !isProd ? '[name].[hash:6].css' : '[name].[chunkhash].css',
      chunkFilename: !isProd ? '[id].[hash:6].css' : '[id].[chunkhash].css',
    }),
  ],
});
