import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { buildDirectory, sourceDirectory } from '../webpack/constans.js';

const common = () => {
  return {
    entry: [sourceDirectory],
    output: {
      path: buildDirectory,
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { modules: true } },
            'sass-loader',
          ],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
    ],
  };
};

export default common;
