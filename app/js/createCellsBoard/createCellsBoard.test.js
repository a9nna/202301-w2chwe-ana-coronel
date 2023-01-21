import createCellsBoard from "./createCellsBoard";

describe("Given the function placeRandomCell", () => {
  describe("When it receives 3,3", () => {
    test("Then return [[[],[],[]],[[],[],[]],[[],[],[]]]", () => {
      const expectedResult = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
      ];

      const actualResult = createCellsBoard(3, 3);

      expect(actualResult).toStrictEqual(expectedResult);
    });
  });
});
