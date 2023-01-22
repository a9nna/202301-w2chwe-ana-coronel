const findCells = (cellBoard) => {
  const cellsFound = [];
  for (let i = 0; i < cellBoard.length; i++) {
    for (let j = 0; j < cellBoard[i].length; j++) {
      if (cellBoard[i][j] === "X") {
        cellsFound.push([j, i]);
      }
    }
  }

  return cellsFound;
};

export default findCells;
