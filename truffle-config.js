// Required for Rinkeby deployment
var HDWalletProvider = require("truffle-hdwallet-provider");
var privateKey = "<PRIVATE_KEY>";
var rinkebyEndpoint = "https://rinkeby.infura.io/v3/<SECRET>";

var gasLimit = 5000000;

module.exports = {

  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: gasLimit,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(privateKey, rinkebyEndpoint),
      gasPrice: 10000000000,
      gas: gasLimit,
      network_id: 4,
    }
  },
  solc: {
    version: "0.5.12",
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  mocha: {
    // reporter: 'eth-gas-reporter'
  },
  compilers: {
    solc: {
      version: "0.5.11",
    },
  },
};
