const checkForCellsAround = (cellBoard, coordinateX, coordinateY) => {
  const cellUpLeft = cellBoard[coordinateX - 1]
    ? cellBoard[coordinateX - 1][coordinateY - 1]
    : undefined;
  const cellUp = cellBoard[coordinateX]
    ? cellBoard[coordinateX][coordinateY - 1]
    : undefined;
  const cellUpRight = cellBoard[coordinateX + 1]
    ? cellBoard[coordinateX + 1][coordinateY - 1]
    : undefined;
  const cellLeft = cellBoard[coordinateX - 1]
    ? cellBoard[coordinateX - 1][coordinateY]
    : undefined;
  const cellRight = cellBoard[coordinateX + 1]
    ? cellBoard[coordinateX + 1][coordinateY]
    : undefined;
  const cellDownLeft = cellBoard[coordinateX - 1]
    ? cellBoard[coordinateX - 1][coordinateY + 1]
    : undefined;
  const cellDown = cellBoard[coordinateX]
    ? cellBoard[coordinateX][coordinateY + 1]
    : undefined;
  const cellDownRight = cellBoard[coordinateX + 1]
    ? cellBoard[coordinateX + 1][coordinateY + 1]
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
