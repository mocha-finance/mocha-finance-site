require('babel-register');
require('babel-polyfill');
require('dotenv').config();

const hdWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: () => new hdWalletProvider(process.env.MNEMONIC, `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`),
      network_id: 3,
      gas: 7000000,
      confirmations: 2,
      timeoutBlocks: 20,
      skipDryRun: true
    },
    production: {
      provider: () => new hdWalletProvider(process.env.MNEMONIC, `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`),
      network_id: 1,
      gas: 7000000,
      confirmations: 2,
      timeoutBlocks: 10,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
