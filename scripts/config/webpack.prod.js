import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { merge } from 'webpack-merge';
import webpack from 'webpack';
import { buildDirectory, projectRoot } from '../webpack/constans.js';
import getProdConfig from './webpack.common.js';

const cleanOptions = {
  verbose: true,
  root: projectRoot,
};

const prod = () => {
  return merge(getProdConfig(), {
    mode: 'none',
    devtool: false,

    plugins: [new CleanWebpackPlugin()],
  });
};

export default prod;
