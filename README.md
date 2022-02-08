# Ethereum Bootcamp DApp Frontend

This is a truffle project. In the directory `frontend` and `vue-frontend` is a Web frontend in place.

In this folder and the frontend folders is an `npm` project

## Installation

Run `npm install` in the project you want to build.

Please see the `README.md` in the specific project folder.

## Deployment Rinkeby

```bash
# Deploy the contract to the Rinkeby network
truffle compile --all
truffle migrate --reset --network rinkeby
```

*Deployments*
Address: 0x20C9C7E1b96b8D99A41322bFa0c9D9D7Ee507EC6
Etherscan: https://rinkeby.etherscan.io/address/0x20C9C7E1b96b8D99A41322bFa0c9D9D7Ee507EC6

## Update Repo

Update the dependencies in package.json

```bash
# Update all versions in package.json
ncu -u
## Hint: openzeppelin-solidity version should not change

npm update
```
