#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
require('colors');

var argv = require('minimist')(process.argv.slice(2));
// console.log(argv);

if (!argv._[0]) {
  throw new Error('Please pass directory name');
}

let selected_template = 'javascript';

if (argv.typescript || argv.tsc || argv.t) {
  console.log(
    '\nInitiating',
    'Create Solidity Project'.cyan.underline,
    'with',
    'TypeScript'.cyan.underline,
    '...'
  );
  selected_template = 'typescript';
  // require('./setup-tsc');
} else {
  console.log('\nInitiating', 'Create Solidity Project'.cyan.underline, '...');
  // require('./setup-normal');
}

setupProject(argv._[0], selected_template);

function setupProject(name, templateName) {
  const template = require(`./templates/${templateName}/setup.json`);

  console.log(
    `\nCreating`,
    `${name}`.green,
    `directory and installing files...`
  );
  fs.mkdirSync(path.resolve(process.cwd(), name));

  // [
  //   { from: ['compile.js'] },
  //   { from: ['deploy.js'] },
  //   { from: ['helpers.js'] },
  //   { from: ['.gitignore'] },
  //   { from: ['test', 'SimpleStorage.test.js'] },
  //   { from: ['contracts', 'SimpleStorage.sol'] },
  //   { from: ['README-for-normal.md'], to: ['README.md'] },
  // ]

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
}

// function recurrsiveCopy(src, destination) {
//   const stat = fs.lstatSync(src);
//   if (stat.isDirectory()) {
//     fs.readdirSync(src).forEach((child) =>
//       copyFile(path.resolve(src, child), path.resolve(destination, child))
//     );
//   } else if (stat.isFile()) {
//     fs.copyFile(
//       path.resolve(__dirname, ...from),
//       path.resolve(process.cwd(), name, ...to),
//       (err) => {
//         if (err) throw err;
//       }
//     );
//   }
// }
