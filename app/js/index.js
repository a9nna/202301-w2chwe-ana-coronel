import createCellsBoard from "./createCellsBoard/createCellsBoard.js";
import placeRandomCell from "./placeRandomCell/placeRandomCell.js";

const gameOfLife = () => {
  createCellsBoard(3, 3);
  placeRandomCell(1, 1);
};

export default gameOfLife;
