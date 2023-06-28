import { findPhraseInArray } from "../app/findPhraseInArray";

describe("findPhraseInArray testing", () => {
  let inputData: string[] = [
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
  describe("it returns correct value when inputs criterias are met", () => {
    it("should return element of given array", () => {
      const result = findPhraseInArray(inputData, "coin");
      expect(result).toEqual(
        expect.arrayContaining([expect.objectContaining(["Litecoin", 2])])
      );
    });
    it("should return last element when inputs' criterias are met", () => {
      const result = findPhraseInArray(inputData, "coin");
      const lastElementOfResult = result[result.length - 1];
      expect(lastElementOfResult).toEqual(["Dogecoin", 6]);
    });
  });
  describe("it returns error when", () => {
    it("- inputData doesn't have 15 elements", () => {
      const inputData = ["a", "b"];
      function expectError() {
        findPhraseInArray(inputData, "b");
      }
      expect(expectError).toThrow("");
    });
  });
});
