import createCellsBoard from "../createCellsBoard/createCellsBoard.js";

const placeRandomCell = (coordinateX, coordinateY) => {
  const cellsBoard = createCellsBoard(3, 3);

  for (let i = 0; i < cellsBoard.length; i++) {
    for (let j = 0; j < cellsBoard[i].length; j++) {
      cellsBoard[coordinateY][coordinateX] = "X";
    }
  }

  return cellsBoard;
};

export default placeRandomCell;
