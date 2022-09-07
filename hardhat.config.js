require("dotenv").config();

require("@nomiclabs/hardhat-ethers");
const METAMASK_PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY;
const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: ALCHEMY_API_URL,
      accounts: [`0x${METAMASK_PRIVATE_KEY}`],
    },
  },
};
