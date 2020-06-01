# Create Solidity Project

A light template, which is intended to get a Ethereum Smart Contracts Developer quickly started into developing Bug-free Smart Contracts using a single command.

Create Solidity Project is tested on macOS and Linux.<br />
If something doesn't work, [file an issue](https://github.com/zemse/create-solidity-project/issues/new).

## Quick Steps

### Setting up a normal project

```sh
$ npx create-solidity-project lottery-contract

or

$ npx csp lottery-contract
```

### Setting up a typescript project

```sh
$ npx create-solidity-project lottery-contract --tsc

or

$ npx csp lottery-contract --tsc
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

## Getting familiarised with the setup

- When you set up a fresh project, do `npm run test`. It compiles the default contract and runs test file.
- If you do `npm run test` again, it won't compile the contracts again since you did not do any changes and directly proceed to running the test cases to show output.
- You can make changes to the default contract file and try `npm run test` again. It will now compile contracts as expected.
- Read the file in the test folder and you can make changes to it and do `npm run test`.
- In case you only want your contract to be compiled, then do `npm run compile`.
- Try implementing a trivial feature to the contract file and writing a test case for it.

## Writing contracts

- When you are already familiarised with the setup, just delete the `SimpleStorage.sol` file and create your contract file for e.g. `Lottery.sol`.
- The test file `SimpleStorage.test.js` already contains some useful code structure. You can instead rename this file as per your contract file for e.g. `Lottery.test.js`.
- Most of the times, writing the test cases before writing contract is preferred for not missing out any condition in smart contract. But in few cases, depending the clarity of conditions for the method you are writing, you might want to write the method first then write test case.

## Deploying contracts

- You can test deployment on testnets like `rinkeby` or `kovan`. For deployment on mainnet, it is suggested to use Remix IDE for now.
- To deploy all compiled contracts, do `node deploy.js deployall rinkeby 0xa6779f54dc1e9959b81f448769450b97a9fcb2b41c53d4b2ab50e5055a170ce7`.
- To deploy a specific contract, write it's JSON file name instead of deployall flag, e.g. `node deploy.js SimpleStorage_SimpleStorage.json rinkeby 0xa6779f54dc1e9959b81f448769450b97a9fcb2b41c53d4b2ab50e5055a170ce7`.
- If the contract requires constructor arguments, you can pass it by adding them after the command, e.g. `node deploy.js SimpleStorage_SimpleStorage.json rinkeby 0xa6779f54dc1e9959b81f448769450b97a9fcb2b41c53d4b2ab50e5055a170ce7 "hello world"`.

## More details

- This project uses [ethers.js](https://github.com/ethers-io/ethers.js), a Complete Ethereum library with wallet implementation in JavaScript. This makes it a great alternative to [web3.js](https://github.com/ethereum/web3.js). You will want to keep ethers.js [documentation](https://docs.ethers.io/ethers.js/html/) handy.
- You can customise to a specific `solc` version by doing `npm i solc@0.5.10`, but it's not recommended. Note: `solc@0.4.*` will not work with this template, because it has a different compile.js structure. It is recommended that you upgrade your smart contract code to be able to be compiled by a `solc@0.5.*` and above compiler. You can check out [breaking changes](https://solidity.readthedocs.io/en/v0.5.0/050-breaking-changes.html) in `0.5.*` and [breaking changes](https://solidity.readthedocs.io/en/v0.6.0/060-breaking-changes.html) in `0.6.*`and upgrade your smart contracts accordingly.
- If you wish to use `web3.js` instead, you can do it by uninstalling `ethers.js` using `npm uninstall ethers`, then you can install `web3.js` using `npm i web3`. Then you will have to change the tests files.
