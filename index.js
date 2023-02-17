// A simple program that uses Alchemy platform to connect to Ethereum node and query information about a specific block identified by its number
// This is done using the JSON-RPC API available from the Ethereum node
// We are using axios librairy to make Http requests

// dotenv is a library installed and used to load the values (API_KEY in this case) from .env
require("dotenv").config();

const api_key = process.env.API_KEY;

// Axios is a promised-based HTTP client that is abile to make HTTP requests
const axios = require("axios");

const ALCHEMY_URL = `https://eth-goerli.g.alchemy.com/v2/${api_key}`;

// A method that return information about a specific block by number
axios
  .post(ALCHEMY_URL, {
    jsonrpc: "2.0",
    id: 1,
    method: "eth_getBlockByNumber", // return information about a block by number
    params: [
      "0xb443", // block 46147
      false, // retrieve the full transaction object in transactions array
    ],
  })
  .then((response) => {
    console.log(
      "Information about the specific block requested by number: ",
      response.data.result
    );
  });

// A function that converts an Hex format variable to a decimal format variable
function hexToDec(hex) {
  return parseInt(hex, 16);
}

// A method that returns the number of the most recent block
axios
  .post(ALCHEMY_URL, {
    jsonrpc: "2.0",
    id: 1,
    method: "eth_blockNumber", // Returns the number of the most recent block.
    params: [],
  })
  .then((response) => {
    console.log(
      "Number of the most recent block: ",
      hexToDec(response.data.result)
    );
  });
