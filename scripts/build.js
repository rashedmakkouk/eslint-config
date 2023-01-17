/* eslint-disable @typescript-eslint/no-var-requires */
const { cp } = require('shelljs');

const outDir = './lib';

cp('-R', './src/bases', outDir);
