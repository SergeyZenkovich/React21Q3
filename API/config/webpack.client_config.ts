import { join } from "path";
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./webpack.common_config.ts').createConfig({
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
        {
          test: /\.(woff(2)?|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[hash][ext][query]'
          }
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
          type: 'asset/resource',
          generator: {
              filename: 'images/[hash][ext][query]'
          }
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