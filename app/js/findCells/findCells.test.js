import findCells from "./findCells";

describe("Given the findCells function", () => {
  describe("When is invocked", () => {
    describe("And have one cell in coordinates (2,0) and another cell in coordinates (1,2)", () => {
      test("Then it should return the position 2,0 and 1,2", () => {
        const expectedPosition = [
          [2, 0],
          [1, 2],
        ];
        const cellBoard = [
          ["", "", "X"],
          ["", "", ""],
          ["", "X", ""],
          ["", "", ""],
        ];

        const actualPosition = findCells(cellBoard);

        expect(actualPosition).toStrictEqual(expectedPosition);
      });
    });
  });
});
