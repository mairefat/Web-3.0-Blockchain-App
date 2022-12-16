//https://eth-goerli.g.alchemy.com/v2/iQKSiTDDujVG0xm08Jufjkj3pp332vY8

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/iQKSiTDDujVG0xm08Jufjkj3pp332vY8",
      accounts: [
        "71fe199dca6ce3532c4c46332c671352e519acd6bc499a88e2e95aff79eda33d",
      ],
    },
  },
};
