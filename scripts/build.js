const {cp, exec, mkdir, rm, test} = require('shelljs');

const target = 'c:/npm/@limo/eslint-config';
const outDir = 'lib';

if (test('-d', outDir))  {
  rm('-rf', `${outDir}/*`);
}

// exec('tsc --build');

cp('-r', './src/bases', './lib');

// if (test('-d', target))  {
//   rm('-rf', `${target}/*`);
// }

// mkdir('-p', `${target}/lib`);

// const metadataFiles = [
//   './package.json',
//   './yarn.lock',
//   'LICENSE',
//   'README.md',
//   'CHANGELOG.md',
// ];

// cp('-r', metadataFiles, target);

// cp('-r', './build/*', `${target}/lib`);
