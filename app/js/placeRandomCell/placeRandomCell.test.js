import placeRandomCell from "./placeRandomCell";

describe("Given the placeRandomCell function", () => {
  describe("When it receives a 1,1 and de cells board", () => {
    test("Then put an X on row 2, column 2 in the cells boards", () => {
      const expectedResult = [
        [" ", " ", " "],
        [" ", "X", " "],
        [" ", " ", " "],
      ];

      const actualResult = placeRandomCell(1, 1);

      expect(actualResult).toStrictEqual(expectedResult);
    });
  });
});
