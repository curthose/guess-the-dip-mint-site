export const candyMachineAddress = "0x2984ab3c7eb5d9b069c142fb368947037e2b603d263911b6d5d17a0c68d0be1c";

export const collectionName = "Guess the Dip"; // Case sensitive!
export const MaxMint = 3
export const COLLECTION_SIZE = 6 

// To remove the background of the dapp to a solid color just delete the "collectionCoverUrl" url below
// Any hosted image can be used
export const collectionCoverUrl = "/preview.gif";
//export const collectionBackgroundUrl = "https://6wnm7eahnmrz3w3a55pu627ibxus563nsfaykske3uuteyj5h77q.arweave.net/9ZrPkAdrI53bYO9fT2voDeku-22RQYVJRN0pMmE9P_8";

export const mode = "test"; // "dev" or "test" or "mainnet"
export let NODE_URL;
export const CONTRACT_ADDRESS = "0x5b71b400de0767bcec88464c33a0c74c839737206883a9379252f4907b8bf30e";
export const SERVICE_NAME = "ftmpad"
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}
