var inputData = [
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

var findPhraseInArray = function (array, phrase) {
  isArrayLength15(array);
  // return
};
array.filter(function (element, index, array) {});
var isArrayLength15 = function (input) {
  if (input.length !== 15) {
    throw new Error("Please provide array with 15 elements");
  }
};
// przykładowe działanie:
var result = findPhraseInArray(inputData, "tut");
// result === [ [2, 'tutaj'], [5, 'TUTAJ'] ]
