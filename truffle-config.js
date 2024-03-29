// Required for Rinkeby deployment
var HDWalletProvider = require("truffle-hdwallet-provider");
var privateKey = "<PRIVATE-KEY>";
var rinkebyEndpoint = "https://rinkeby.infura.io/v3/<SECRET>";

var gasLimit = 5000000;

module.exports = {

  plugins: ["truffle-security"],


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
      version: "0.8.11",
    },
  },
};
