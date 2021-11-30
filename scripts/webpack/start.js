import webpack from 'webpack';
import devServer from 'webpack-dev-server';
import hot from 'webpack-hot-middleware';
import openBrowser from 'react-dev-utils/openBrowser.js';
import getDevConfig from '../config/webpack.dev.js';

const compiler = webpack(getDevConfig());

import { host, port } from './constans.js';

const server = new devServer(compiler, {
  host: host,
  port: port,
  historyApiFallback: true,
  overlay: true,
  quiet: true,
  clientLogLevel: 'none',
  noInfo: true,
  after: (app) => {
    app.use(
      hot(compiler, {
        log: false,
      })
    );
  },
});

server.listen(port, host, () => {
  console.log(`
          Serv on http://${host}:${port}
          `);
  openBrowser(`http://${host}:${port}`);
});

export default server;
