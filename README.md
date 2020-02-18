# Smart Solidity Template
A light template, which is intended to get a Ethereum Smart Contracts Developer quickly started into developing Bug-free Smart Contracts.

## Steps to write your next smart contract with this template
1. Start a fresh solidity project using this template through https://github.com/zemse/smart-solidity-template/generate.
2. Clone your project using `git clone <repo-git-url>` in your projects folder.
3. Delete `SimpleStorage.sol` from `contracts` folder. Create your smart contract file with it's appropriate name, e.g. `Lottery.sol`. Please make sure that you are using the latest version of solidity in your smart contract in the first line `pragma solidity 0.6.1`.
4. In the project directory, do `node compile.js`. This will compile your contract, show errors or warnings if any and will place the json files into a build folder.
5. In the `test` folder, you can rename the existing `SimpleStorage.test.js` file by your contract name, e.g. `Lottery.test.js` and refer to the contents for understanding to write tests. Run the tests by doing `npm run test`.
6. While developing smart contract, it's a good practice to write tests as you implement any new contract code.
7. The command `npm run test` compiles your contracts if you made any changes and then runs tests.

## Steps to deploy contract
- You can test deployment on testnets like `rinkeby` or `kovan`. For deployment on mainnet, it is suggested to use Remix IDE for now.
- To deploy all compiled contracts, do `node deploy.js deployall rinkeby 0xa6779f54dc1e9959b81f448769450b97a9fcb2b41c53d4b2ab50e5055a170ce7`.
- To deploy a specific contract, write it's JSON file name instead of deployall flag, e.g. `node deploy.js SimpleStorage_SimpleStorage.json rinkeby 0xa6779f54dc1e9959b81f448769450b97a9fcb2b41c53d4b2ab50e5055a170ce7`.
- If the contract requires constructor arguments, you can pass it by adding them after the command, e.g. `node deploy.js SimpleStorage_SimpleStorage.json rinkeby 0xa6779f54dc1e9959b81f448769450b97a9fcb2b41c53d4b2ab50e5055a170ce7 "hello world"`.

## Customization
- You can customise to a specific `solc` version by doing `npm i solc@0.5.10`, but it's not recommended. Note: `solc@0.4.*` will not work with this template, because it has a different compile.js structure. It is recommended that you upgrade your smart contract code to be able to be compiled by a `solc@0.5.*` compiler. You can check out breaking changes in `0.5.*` at https://solidity.readthedocs.io/en/v0.5.0/050-breaking-changes.html and upgrade your smart contracts accordingly.
- This project uses `ethers.js` library in the tests. You can find docs at https://docs.ethers.io/ethers.js/html/. If you wish to use `web3.js` instead, you can do it by uninstalling `ethers.js` using `npm uninstall ethers`, then you can install `web3.js` using `npm i web3`. Then you will have to change the tests files.
