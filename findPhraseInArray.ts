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
  return;
  // return
};

const isArrayLength15 = (input) => {
  if (input.length !== 15) {
    throw new Error("Please provide array with 15 elements");
  }
};

const isPhraseInArray = (input, phrase) => {
  return input.includes(phrase);
};

console.log(array.filter(isPhraseInArray(inputData,"coin"));

array.filter((element) => {
  return element.includes("coin");
});

const isPhraseInArray = (input, phrase) => {
     if (input.includes (phrase)){
        return input
     }
}

console.log (inputData.filter())

console.log ()

// przykładowe działanie:
const result = findPhraseInArray(inputData, "tut");
// result === [ [2, 'tutaj'], [5, 'TUTAJ'] ]
