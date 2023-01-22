import checkIfLivesOrDies from "./checkIfLivesorDies";

describe("Given the function checkIfLivesOrDies", () => {
  describe("When is invoked", () => {
    describe("And it have an 'X' and 'X' around", () => {
      test("Then it should return 'X'", () => {
        const expectedResult = "X";
        const cellsAround = 2;
        const initialStatus = "X";

        const actualNumberOfCells = checkIfLivesOrDies(
          cellsAround,
          initialStatus
        );

        expect(actualNumberOfCells).toBe(expectedResult);
      });
    });
  });
});
