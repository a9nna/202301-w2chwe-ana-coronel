import checkForCellsAround from "./checkForCellsAround/checkForCellsAround.js";
import checkIfLivesOrDies from "./checkIfLivesOrDies/checkIfLivesorDies.js";

const gameOfLife = (firstGeneration) => {
  firstGeneration = [
    ["", "", "", "", ""],
    ["", "X", "X", "X", ""],
    ["", "", "", "", ""],
  ];

  const nextGeneration = [];

  for (let i = 0; i < firstGeneration.length; i++) {
    const nextGenerationRow = [];
    for (let j = 0; j < firstGeneration[i].length; j++) {
      const numberOfCellsAround = checkForCellsAround(firstGeneration, i, j);
      const finalStatus = checkIfLivesOrDies(
        numberOfCellsAround,
        firstGeneration[i][j]
      );
      nextGenerationRow.push(finalStatus);
    }

    nextGeneration.push(nextGenerationRow);
  }

  console.table(firstGeneration);
  console.table(nextGeneration);

  return nextGeneration;
};

gameOfLife();

export default gameOfLife;
