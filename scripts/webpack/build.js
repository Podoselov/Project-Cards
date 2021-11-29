import webpack from 'webpack';

import getProdConfig from '../config/webpack.prod.js';
const compiler = webpack(getProdConfig());

compiler.run((errors, stats) => {
  if (errors) {
    console.errors(errors.stack || error);
    if (errors.details) {
      console.errors(errors.details);
    }
    return null;
  }

  const info = stats.toString({
    hash: true,
    colors: true,
    module: false,
    entrypoints: false,
    env: true,
  });

  console.log('Completed');
  if (stats.hasErrors()) {
    console.log('Error');
    console.error(info);
  }
  if (stats.hasWarnings()) {
    console.log('Warning');
    console.warn(info);
  }
});
