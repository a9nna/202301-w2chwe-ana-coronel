import gameOfLife from ".";

describe("Given the gameOfLife function", () => {
  describe("When is invoked", () => {
    describe("And it receives the cells board [['', '', '', '', ''],['', 'X', 'X', 'X', ''],['', '', '', '', '']]", () => {
      test("Then it should return the cells board [['', '', 'X', '', ''],['', '', 'X', '', ''],['', '', 'X', '', '']]", () => {
        const expectedResult = [
          ["", "", "X", "", ""],
          ["", "", "X", "", ""],
          ["", "", "X", "", ""],
        ];

        const actualResult = gameOfLife();

        expect(actualResult).toStrictEqual(expectedResult);
      });
    });
  });
});
