const createCellsBoard = (
  numberOfRowsInCellsBoard,
  numberOfColumnsInCellsBoard
) => {
  const cellsBoard = [];

  for (let i = 0; i < numberOfRowsInCellsBoard; i++) {
    const columnsInCellsBoard = [];
    for (let j = 0; j < numberOfColumnsInCellsBoard; j++) {
      const rowsInCellsBoard = " ";
      columnsInCellsBoard.push(rowsInCellsBoard);
    }

    cellsBoard.push(columnsInCellsBoard);
  }

  return cellsBoard;
};

export default createCellsBoard;
