const inputData = [
  "Bitcoin",
  "Ethereum",
  "Litecoin",
  "Solana",
  "Cardano",
  "Polkadot",
  "Dogecoin",
  "Tron",
  "EOS",
  "Uniswap",
  "Avalanche",
  "Cosmos",
  "Polygon",
  "Chainlink",
  "Monero",
];

console.log(inputData.length);

const findPhraseInArray = (array, phrase) => {
  isArrayLength15(array);
  // return
};

array.filter((element, index, array) => {});

const isArrayLength15 = (input) => {
  if (input.length !== 15) {
    throw new Error("Please provide array with 15 elements");
  }
};

// przykładowe działanie:
const result = findPhraseInArray(inputData, "tut");
// result === [ [2, 'tutaj'], [5, 'TUTAJ'] ]
