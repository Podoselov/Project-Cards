let path = require('path');

let conf = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
    ],
  },
};

module.exports = (env, argv) => {
  conf.devtool =
    argv.mode === 'production' ? 'none' : 'eval-cheap-module-source-map';
  return conf;
};
