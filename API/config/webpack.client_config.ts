import { join } from "path";
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./webpack.common').createConfig({
  target: 'client'
});

module.exports = {
  ...config,

  module: {
    ...config.module,

    rules: [
        ...config.module.rules,

        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ],
        },
    ],
  },

  plugins: [
    ...config.plugins,

    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
};