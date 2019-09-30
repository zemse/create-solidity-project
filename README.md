# Solidity Project Template
This template is intended to get a Ethereum Smart Contracts Developer quickly started into developing error free smart contracts.
## Steps to work with this template
1. Clone this repo
2. Place your solidity files in the `contracts` folder
3. In the project directory, do `node compile.js`. This will compile your contracts, show errors or warnings if any and will place the json files into a build folder.
4. You can write tests in the `test` folder. Checkout the sample file. Run the tests by doing `npm run test`.
5. While developing smart contract, it's a good practice to write tests as you write the contract code.
6. If you make a change in smart contract code, and want to simultaneously compile and test your contract, do `node compile.js && npm run test`.

## Steps to deploy contract
- You can test deployment on testnets like `rinkeby` or `kovan`. For deployment on mainnet use `homestead`, the process would be same as testnet, but deployment time might vary on different networks due to crowdedness. 
- To deploy all compiled contracts, do `node deploy.js deployall rinkeby 0xa6779f54dc1e9959b81f448769450b97a9fcb2b41c53d4b2ab50e5055a170ce7`
- To deploy a specific contract, write it's JSON file name instead of deployall flag, e.g. `node deploy.js SimpleStorage_0.json rinkeby 0xa6779f54dc1e9959b81f448769450b97a9fcb2b41c53d4b2ab50e5055a170ce7`
- If the contract requires constructor arguments, you can pass it by adding them after the command, e.g. `node deploy.js SimpleStorage_0.json rinkeby 0xa6779f54dc1e9959b81f448769450b97a9fcb2b41c53d4b2ab50e5055a170ce7 "hello world"`
