const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const sourceFolderPath = path.resolve(__dirname, 'contracts');
const buildFolderPath = path.resolve(__dirname, 'build');

const getContractSource = contractFileName => {
  const contractPath = path.resolve(__dirname, 'contracts', contractFileName);
  const source = fs.readFileSync(contractPath, 'utf8');
  return source;
};

let sources = {};

fs.readdirSync(sourceFolderPath).forEach(contractFileName => {
  sources = {
    ...sources,
    [contractFileName]: {
      content: getContractSource(contractFileName)
    }
  }
});
//console.log(sources);

const input = {
    language: 'Solidity',
    sources,
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}

console.log('\nCompiling contracts...');
const output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log('Done');

let shouldBuild = true;

if (output.errors) {
  // console.error(output.errors);
  for(error of output.errors) {
    console.log('-'.repeat(process.stdout.columns));
    console.group(error.severity.toUpperCase());
    console.log(error.formattedMessage);
    console.groupEnd();
  }
  if(Object.values(output.errors).length) console.log('-'.repeat(process.stdout.columns));
  // throw '\nError in compilation please check the contract\n';
  for(error of output.errors) {
    if(error.severity === 'error') {
      shouldBuild = false;
      throw 'Error found';
      break;
    }
  }
}

if(shouldBuild) {
  console.log('\nBuilding please wait...');

  fs.removeSync(buildFolderPath);
  fs.ensureDirSync(buildFolderPath);

  let i = 0;
  for (let contractFile in output.contracts) {
    for(let key in output.contracts[contractFile]) {
      //console.log(key, Object.keys(output.contracts[contractFile][key]));
      fs.outputJsonSync(
        path.resolve(buildFolderPath, `${contractFile.split('.')[0]}_${key}.json`),
        output.contracts[contractFile][key]
      );

    }
    i++;
  }
  console.log('Build finished successfully!\n');
} else {
  console.log('\nBuild failed\n');
}
