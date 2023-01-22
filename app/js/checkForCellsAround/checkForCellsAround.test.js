import checkForCellsAround from "./checkForCellsAround";

describe("Given the checkForCellsAround function", () => {
  describe("When is invoked", () => {
    describe("And the cell is in the top-left corner of the cells boars", () => {
      test("Then should return 2", () => {
        const cellBoard = [
          ["X", "X", ""],
          ["", "X", ""],
          ["", "", ""],
          ["X", "", ""],
        ];
        const expectedValue = 2;

        const result = checkForCellsAround(cellBoard, 0, 0);

        expect(result).toBe(expectedValue);
      });
    });
  });
});
