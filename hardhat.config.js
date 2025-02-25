require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    vanarTestnet: {
      url: "https://testnet.vanarchain.com",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 2049
    }
  }
};
