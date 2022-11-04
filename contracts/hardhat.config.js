require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-ganache");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-truffle4");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-vyper");


task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("balances", "Prints the list of AVAX account balances", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    balance = await ethers.provider.getBalance(account.address);
    console.log(account.address, "has balance", balance.toString());
  }
});
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version "0.4.26"
      },
      {
        version: "0.5.16"
      },
      {
        version: "0.6.2"
      },
      {
        version: "0.6.4"
      },
      {
        version: "0.8.1"
      },
      {
        version: "0.8.17"
      }
    ]
  },
  networks: {
    hardhat: {
      gasPrice: 470000000000,
      chainId: 1,
    },
    truffle: {
      url: 'http://192.168.0.3:8333/ext/bc/C/rpc',
      gasPrice: 470000000000,
      chainId: 10,
      accounts: ["0xD160BC33d75A8D8C25496Df9399f534D471A84E6", 
    ]
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 470000000000,
      chainId: 43112,
      accounts: [0xe01c03fE5572C3866c66F71cf050E02668B515F1
    ]
    },
    mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 470000000000,
      chainId: 1,
      accounts: [0x508696Efc3AcF1493dbC183fFccD8b3A38704553
    ]
  },
  ethereum: {
    url: 'https://mainnet.infura.io/v3/8264661ebc6343dea7371a9dd2dd2669',
    gasPrice: 470000000000,
    chainId: 10,
    accounts: ["0x5Da3189DF558cf3f8CCdA526f6cfa85e4BDdb28D", 
  ]
    }
  }
};
