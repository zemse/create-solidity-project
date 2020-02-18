#!/bin/bash
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

if [[ $1 == "" ]]
	then
	echo "${red}Please pass new project folder name as argument..${reset}"
	exit 0
fi
echo ""
echo "Creating folder ${green}$1${reset} and downloading project files..."
mkdir $1
mkdir $1/contracts
curl -s https://raw.githubusercontent.com/zemse/smart-solidity-template/master/contracts/SimpleStorage.sol -o $1/contracts/SimpleStorage.sol
mkdir $1/test
curl -s https://raw.githubusercontent.com/zemse/smart-solidity-template/master/test/SimpleStorage.test.js -o $1/test/SimpleStorage.test.js
curl -s https://raw.githubusercontent.com/zemse/smart-solidity-template/master/.gitignore -o $1/.gitignore
curl -s https://raw.githubusercontent.com/zemse/smart-solidity-template/master/README.md -o $1/README.md
curl -s https://raw.githubusercontent.com/zemse/smart-solidity-template/master/compile.js -o $1/compile.js
curl -s https://raw.githubusercontent.com/zemse/smart-solidity-template/master/deploy.js -o $1/deploy.js
curl -s https://raw.githubusercontent.com/zemse/smart-solidity-template/master/package.json -o $1/package.json
echo $'Done\n'
cd $1
echo "Installing dependencies..."
npm i
echo $'\nInitiating Git'
git init
git add .
git commit -m "Initial commit" && echo $'\nGit setup done'
echo $'\nSmart Solidity Template setup is done successfully!\n'

echo "You are welcome to submit issues or contribute code on GitHub (${green}https://github.com/zemse/smart-solidity-template${reset})."

echo $'\nStart changing directory:'
echo "${green}cd $1${reset}"

echo $'\nTo compile contracts and run tests:'
echo "${green}npm run test${reset}"

echo $'\nIf you only want to compile contracts without running tests:'
echo "${green}npm run compile${reset}"

echo $'\nHappy BUIDLing!\n'
