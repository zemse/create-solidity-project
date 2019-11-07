# Smart Solidity Template
A light template, which is intended to get a Ethereum Smart Contracts Developer quickly started into developing Bug-free Smart Contracts.
## Steps to checkout how this works
1. You can clone it locally to see how this works using `git clone https://github.com/zemse/smart-solidity-template.git`.
2. `cd smart-solidity-template`.
3. `npm i`. This might take a minute or two and setup is done you can start working.
4.  You can go through the example contract file in `contracts/SimpleStorage.sol`.
5. You can do `npm run test`, this will run a script to check if the contract works as intended.
6. Now you try making a change in `SimpleStorage.sol` file, then do `node compile.js && npm run test`. This will compile the modified contract, and display errors/warnings. If no error was found, it will run tests and now you can see what is working and what isn't by looking at the tests.
7. You can deploy the contract on test networks like `rinkeby` or `kovan` using the `deploy.js` script. Do `node deploy.js deployall <network-name> <private-key>`. For example, `node deploy.js deployall rinkeby 0xa6779f54dc1e9959b81f448769450b97a9fcb2b41c53d4b2ab50e5055a170ce7`. Please pay attention that if there are insufficient funds on `network` in wallet address associated with the `private key`, it will give an error. You can get funds by google searching about faucets, for e.g. `rinkeby faucet`.

## Steps to write your next smart contract with this template
1. Start a fresh solidity project using this template through https://github.com/zemse/smart-solidity-template/generate.
2. Clone your project locally to work on it.
3. Delete `SimpleStorage.sol` from `contracts` folder. Create your smart contract file with it's appropriate name, e.g. `Lottery.sol`. Please make sure that you are using the latest version of solidity in your smart contract in the first line `pragma solidity 0.5.11`.
4. In the project directory, do `node compile.js`. This will compile your contract, show errors or warnings if any and will place the json files into a build folder.
5. In the `test` folder, you can rename the existing `SimpleStorage.test.js` file by your contract name, e.g. `Lottery.test.js` and refer to the contents for understanding to write tests. Run the tests by doing `npm run test`.
6. While developing smart contract, it's a good practice to write tests as you implement any new contract code.
7. If you make a change in smart contract code, and want to see if nothing breaks old functionality, you can hit a one liner `node compile.js && npm run test`, this will simultaneously compile and run your tests.

## Steps to deploy contract
- You can test deployment on testnets like `rinkeby` or `kovan`. For deployment on mainnet use `homestead`, the process would be same as testnet, but deployment time might vary on different networks due to crowdedness.
- To deploy all compiled contracts, do `node deploy.js deployall rinkeby 0xa6779f54dc1e9959b81f448769450b97a9fcb2b41c53d4b2ab50e5055a170ce7`.
- To deploy a specific contract, write it's JSON file name instead of deployall flag, e.g. `node deploy.js SimpleStorage_0.json rinkeby 0xa6779f54dc1e9959b81f448769450b97a9fcb2b41c53d4b2ab50e5055a170ce7`.
- If the contract requires constructor arguments, you can pass it by adding them after the command, e.g. `node deploy.js SimpleStorage_0.json rinkeby 0xa6779f54dc1e9959b81f448769450b97a9fcb2b41c53d4b2ab50e5055a170ce7 "hello world"`.

## Customization
- You can customise to a specific `solc` version by doing `npm i solc@0.5.10`, but it's not recommended. Note: `solc@0.4.*` will not work with this template, because it has a different compile.js structure. It is recommended that you upgrade your smart contract code to be able to be compiled by a `solc@0.5.*` compiler. You can check out breaking changes in `0.5.*` at https://solidity.readthedocs.io/en/v0.5.0/050-breaking-changes.html and upgrade your smart contracts accordingly.
- This project uses `ethers.js` library in the tests. You can find docs at https://docs.ethers.io/ethers.js/html/. If you wish to use `web3.js` instead, you can do it by uninstalling `ethers.js` using `npm uninstall ethers`, then you can install `web3.js` using `npm i web3`. Then you will have to change the tests files.
