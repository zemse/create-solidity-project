#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
require('colors');

var argv = require('minimist')(process.argv.slice(2));
// console.log(argv);

if (!argv._[0]) {
  throw new Error('Please pass directory name');
}

if (argv.typescript || argv.tsc || argv.t) {
  console.log(
    '\nInitiating',
    'Create Solidity Project'.cyan.underline,
    'with',
    'TypeScript'.cyan.underline,
    '...'
  );
  require('./setup-tsc');
} else {
  console.log('\nInitiating', 'Create Solidity Project'.cyan.underline, '...');
  require('./setup-normal');
}
