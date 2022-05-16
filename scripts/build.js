const {cp, exec, mkdir, rm, test} = require('shelljs');

const outDir = 'lib';

cp('-R', './src/bases', './lib');
