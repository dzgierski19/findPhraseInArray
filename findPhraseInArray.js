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

var lowerCasedInputData = inputData.map((element) => element.toLowerCase());
// console.log(lowerCasedInputData);

var findPhraseInArray = function (array, phrase) {
  isArrayLength15(array);
  return isPhraseInArray(array, phrase);
  // return
};
var isArrayLength15 = function (input) {
  if (input.length !== 15) {
    throw new Error("Please provide array with 15 elements");
  }
};
var isPhraseInArray = function (array, phrase) {
  const phraseLowerCased = phrase.toLowerCase();
  return array.filter((element) =>
    element.toLowerCase().includes(phraseLowerCased)
  );
};

const filteredArray = isPhraseInArray(inputData, "coin");

const isIndexAvailable = (filteredArray) => {
  let array = [];
  for (i = 0; i < filteredArray.length; i++) {
    array += lowerCasedInputData.indexOf(filteredArray[i].toLowerCase());
  }
  return array.split("");
};

const arrayWithIndexes = isIndexAvailable(filteredArray);

const splitArrays = (arrayWithIndexes, filteredArray) => {
  for (i = 0; i < filteredArray.length; i++) {
    console.log([...arrayWithIndexes[i], filteredArray[i]]);
  }
};

console.log(splitArrays(arrayWithIndexes, filteredArray));

// console.log(findPhraseInArray(inputData, "COIN"));

// przykładowe działanie:
var result = findPhraseInArray(inputData, "tut");
// result === [ [2, 'tutaj'], [5, 'TUTAJ'] ]
