import { use } from "@ramestta/ramajs";
import { Web3ClientPlugin } from "@ramestta/rama-ethers";

use(Web3ClientPlugin);

console.log('process.env.NODE_ENV', process.env.NODE_ENV);


import './staking_client.spec'
import './staking_manager.spec'
import './validator_share.spec'
// import './erc20.spec'
// import './erc721.spec'
// import './erc1155.spec'
