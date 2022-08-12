// import { HardhatUserConfig } from "hardhat/config";
require("dotenv").config({ path: ".env" });
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomicfoundation/hardhat-chai-matchers";
// import "@nomiclabs/hardhat-waffle";
// import { task } from 'hardhat/config';
// require("@nomiclabs/hardhat-etherscan");

// const config: HardhatUserConfig = {
//   solidity: "0.8.9",
// };

// export default config;
// require("@nomicfoundation/hardhat-toolbox")
// import("dotenv")

require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-ethers");
// require("@nomicfoundation/hardhat-chai-matchers");
// require("./tasks/block-number")
require("hardhat-gas-reporter")
require("solidity-coverage")
// require("hardhat-deploy")

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY 
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
      blockConfirmations: 6,
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  solidity: {
    compilers: [{ version: "0.8.9" }, { version: "0.6.6" }],
  },
};

// module.exports = {
//     // defaultNetwork: "hardhat", //has its own private and rpc key for deployment
//     defaultNetwork: "hardhat",
//     networks: {
//         rinkeby: {
//             url: RINKEBY_RPC_URL,
//             accounts: [PRIVATE_KEY],
//             chainId: 4,
//             blockConfirmations: 6,
//         },
//         localhost: {
//             url: "http://127.0.0.1:8545/",
//             chainId: 31337,
//         },
//     },
//     // solidity: "0.8.9",
//     solidity: {
//         compilers: [{ version: "0.8.9" }, { version: "0.6.6" }],
//     },
//     etherscan: {
//         apiKey: ETHERSCAN_API_KEY,
//     },
//     gasReporter: {
//         enabled: true,
//         // enabled: false,
//         outputFile: "gas-report.txt",
//         noColors: true,
//         currency: "USD",
//         coinmarketcap: COINMARKETCAP_API_KEY,
//         // token: "MATIC",
//         token: "ETH",
//     },
//     namedAccounts: {
//         deployer: {
//             default: 0,
//         },
//         user: {
//             default: 1,
//         },
//     },
// }
