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
    it("should return result when phrase is included in at least one element in array", () => {
      const result = findPhraseInArray(inputData, "coin");
      expect(result).toEqual([
        ["Bitcoin", 0],
        ["Litecoin", 2],
        ["Dogecoin", 6],
      ]);
    });
    it("should return empty array when phrase isn't included in any element", () => {
      const result = findPhraseInArray(inputData, "Pepe");
      expect(result).toHaveLength(0);
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

//dopisać it z pełnym rozwiązaniem
//Dopisać rozwiązanie z emptyArray
