const checkForCellsAround = (cellBoard, i, j) => {
  const cellUpLeft =
    cellBoard[i - 1] && cellBoard[i - 1][j - 1]
      ? cellBoard[i - 1][j - 1]
      : undefined;
  const cellUp = cellBoard[i - 1] ? cellBoard[i - 1][j] : undefined;
  const cellUpRight =
    cellBoard[i - 1] && cellBoard[i - 1][j + 1]
      ? cellBoard[i - 1][j + 1]
      : undefined;
  const cellLeft = cellBoard[i][j - 1] ? cellBoard[i][j - 1] : undefined;
  const cellRight = cellBoard[i][j + 1] ? cellBoard[i][j + 1] : undefined;
  const cellDownLeft =
    cellBoard[i + 1] && cellBoard[i + 1][j - 1]
      ? cellBoard[i + 1][j - 1]
      : undefined;
  const cellDown = cellBoard[i + 1] ? cellBoard[i + 1][j] : undefined;
  const cellDownRight =
    cellBoard[i + 1] && cellBoard[i + 1][j + 1]
      ? cellBoard[i + 1][j + 1]
      : undefined;

  let count = 0;

  const countCellsAround = (cellToCheck) => {
    if (cellToCheck !== undefined && cellToCheck === "X") {
      count++;
      return count;
    }
  };

  countCellsAround(cellUpLeft);
  countCellsAround(cellUp);
  countCellsAround(cellUpRight);
  countCellsAround(cellLeft);
  countCellsAround(cellRight);
  countCellsAround(cellDownLeft);
  countCellsAround(cellDown);
  countCellsAround(cellDownRight);

  return count;
};

export default checkForCellsAround;
