const checkIfLivesOrDies = (cellsAround, initialStatus) => {
  if (initialStatus === "X" && cellsAround < 2) {
    return "";
  }

  if (
    (initialStatus === "X" && cellsAround === 2) ||
    (initialStatus === "X" && cellsAround === 3)
  ) {
    return "X";
  }

  if (initialStatus === "X" && cellsAround > 3) {
    return "";
  }

  if (initialStatus === "" && cellsAround === 3) {
    return "X";
  }

  return "";
};

export default checkIfLivesOrDies;
