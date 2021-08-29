import { join } from "path";
import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

function createConfig({
  target,
}) {
  let root = join(__dirname, '../');

  let src = join(root, 'src');

  let name = '[name].js'

  let dist = join(root, 'dist', target);

  let IS_SERVER = target === 'server';
  let IS_CLIENT = target === 'client';

  return {
    name: target,
    entry: join(src, target),

    mode: 'development',
    // mode: 'production',

    output: {
      path: dist,
      filename: name,
      chunkFilename: name,
    },

    resolve: {
      modules: [
        'node_modules',
        'src'
      ],
      extensions: ['.tsx', '.ts', '.js'],
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
      ],
    },

    plugins: [
      new webpack.DefinePlugin({
        IS_CLIENT: JSON.stringify(IS_CLIENT),
        IS_SERVER: JSON.stringify(IS_SERVER),
        'typeof window': JSON.stringify(IS_CLIENT ? 'object' : 'undefined')
      }),
    ],
  };
}

module.exports = {
  createConfig,
};