import { resolve } from 'path';

import path from 'app-root-path';

const projectRoot = path;
const sourceDirectory = resolve(projectRoot + '/src/js/');
const buildDirectory = resolve(projectRoot + '/dist/');
const host = 'localhost';
const port = 3000;
export { projectRoot, sourceDirectory, buildDirectory, host, port };
