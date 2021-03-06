const path = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';
  return {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.join(__dirname, 'dist'),
    },
    module: {
      rules: [{
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      }],
    },
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
    },
  }
};
