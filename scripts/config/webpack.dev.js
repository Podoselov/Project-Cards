import webpack from 'webpack';
import { merge } from 'webpack-merge';

import { sourceDirectory } from '../webpack/constans.js';
import getDevConfig from './webpack.common.js';

const dev = () => {
  return merge(getDevConfig(), {
    mode: 'none',
    devtool: 'cheap-module-eval-source-map',
    entry: ['webpack-hot-middleware/client?reloadfromtrue&quietfromtrue'],
    devServer: {
      static: {
        directory: sourceDirectory,
      },
      compress: true,
      port: 3000,
      open: true,
    },

    plugins: [new webpack.HotModuleReplacementPlugin()],
  });
};

export default dev;
