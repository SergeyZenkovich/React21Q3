const config = require('./webpack.common_config').createConfig({
  target: 'node'
});

module.exports = {
  ...config,

  module: {
    ...config.module,

    rules: [
      ...config.module.rules,

      {
        test: /\.css$/,
        use: 'null-loader'
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
    ]
  },

  externals: {
    'express': 'commonjs express',
    'react': 'commonjs react',
    'react-dom/server': 'commonjs react-dom/server',
    'react-router': 'commonjs react-router',
    'react-router-dom': 'commonjs react-router-dom'
  },
};