#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
require('colors');

var argv = require('minimist')(process.argv.slice(2));
// console.log(argv);

if (!argv._[0]) {
  throw new Error('Please pass directory name');
}

let templateName = 'JavaScript';
if (argv.template || argv.t) {
  if (['typescript', 'tsc'].includes(argv.template || argv.t)) {
    templateName = 'TypeScript';
  } else {
    throw new Error(`Unknown template: ${argv.template || argv.t}.`);
  }
}

const name = argv._[0];
const initiating_text = [
  '\nInitiating',
  'Create Solidity Project'.cyan.underline,
];
if (templateName !== 'JavaScript') {
  initiating_text.push('with', templateName.cyan.underline);
}
console.log(...initiating_text, '...');

templateName = templateName.toLowerCase();
const template = require(`./templates/${templateName}/setup.json`);

console.log(`\nCreating`, `${name}`.green, `directory and installing files...`);
fs.mkdirSync(path.resolve(process.cwd(), name));

template.files.forEach((filePath) => {
  const from = filePath.from.split('/');
  const to = filePath.to ? filePath.to.split('/') : from;

  fs.copySync(
    path.resolve(__dirname, 'templates', templateName, ...from),
    path.resolve(process.cwd(), name, ...to)
  );
});

const packageJson = {
  name,
  ...template.packageJson,
};

fs.writeFileSync(
  path.resolve(process.cwd(), name, 'package.json'),
  JSON.stringify(packageJson, null, 2),
  { encoding: 'utf8' }
);

const { execSync } = require('child_process');
console.log('\nInstalling dependencies...');
execSync(
  `npm i ${template.install.map((p) => `${p.name}@${p.version}`).join(' ')}`,
  {
    cwd: path.resolve(process.cwd(), name),
    stdio: 'ignore',
  }
);
execSync(
  `npm i --save-dev ${template.install_dev
    .map((p) => `${p.name}@${p.version}`)
    .join(' ')}`,
  {
    cwd: path.resolve(process.cwd(), name),
    stdio: 'ignore',
  }
);

if (packageJson.scripts.postinstall) {
  execSync(`${packageJson.scripts.postinstall}`, {
    cwd: path.resolve(process.cwd(), name),
    stdio: 'ignore',
  });
}

console.log('\nInitiating Git Repository...');
execSync(
  `cd ${name} && git init && git add . && git commit -m "Initial commit"`,
  () => {}
);
console.log('Done!');

console.log(`\nStart with changing the directory:`);
console.log(`cd ${name}`.green);
console.log(`npm test\n`.green);
console.log('You can check README file for additional information.');
console.log('Happy BUIDLing!\n');
