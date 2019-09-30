# Solidity Project Template
This template is intended to get a Ethereum Smart Contracts Developer quickly started into developing error free smart contracts.
## Steps to work with this template
1. Clone this repo
2. Place your solidity files in the `contracts` folder
3. In the project directory, do `node compile.js`. This will compile your contracts, show errors or warnings if any and will place the json files into a build folder.
4. You can write tests in the `test` folder. Checkout the sample file. Run the tests by doing `npm run test`.
5. While developing smart contract, it's a good practice to write tests as you write the contract code.
6. If you make a change in smart contract code, and want to simultaneously compile and test your contract, do `node compile.js && npm run test`.
