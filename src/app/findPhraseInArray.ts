const inputData: string[] = [
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

const isInputLength15 = (input: string[]) => {
  if (input.length !== 15) {
    throw new Error("Please provide input with 15 elements");
  }
};

export const findPhraseInArray = (
  array: string[],
  phrase: string
): [string, number][] => {
  isInputLength15(array);
  return array.reduce(
    (acc: [string, number][], element: string, index: number) => {
      if (element.toLowerCase().includes(phrase.toLowerCase())) {
        acc.push([element, index]);
      }
      return acc;
    },
    []
  );
};

const result1 = findPhraseInArray(inputData, "COIN");

console.log(result1);
