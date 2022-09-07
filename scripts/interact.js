const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const METAMASK_PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

console.log(JSON.stringify(contract.abi));

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(
  (network = "goerli"),
  ALCHEMY_API_KEY
);

// Signer
const signer = new ethers.Wallet(METAMASK_PRIVATE_KEY, alchemyProvider);

// Contract
const helloWorldContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  signer
);

async function read() {
  const message = await helloWorldContract.message();
  console.log("The message is: " + message);
}

//read();

async function write() {
  const tx = await helloWorldContract.update("Ki si io");
  console.log(tx);

  const receipt = await tx.wait();

  console.log(receipt);

  const newMessage = await helloWorldContract.message();
  console.log("The new message is: " + newMessage);
}

write();
