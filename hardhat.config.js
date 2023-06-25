require("@nomicfoundation/hardhat-toolbox");
// import .env
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",

  networks: {
    localhost: {},
    
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2]
    }
  },
        
};
