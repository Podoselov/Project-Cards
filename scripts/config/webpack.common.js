import { merge } from 'webpack-merge';
import { buildDirectory, sourceDirectory } from '../webpack/constans.js';
import * as modules from '../modules/index.js';

const common = () => {
  return merge(
    {
      entry: [sourceDirectory],
      output: {
        path: buildDirectory,
        filename: 'js/bundle.js',
      },
    },
    modules.loadJavaScript(),
    modules.setupHtml(),
    modules.loadCss(),
    modules.loadFonts(),
    modules.loadSvg(),
    modules.loadScss()
  );
};

export default common;
