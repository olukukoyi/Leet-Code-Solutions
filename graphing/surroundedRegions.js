const surroundedRegions = (board) => {
  const maxRows = board.length;
  const maxCols = board[0].length;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dfs = (r, c) => {
    if (r < 0 || r >= maxRows || c < 0 || c >= maxCols || board[r][c] !== "O") {
      return;
    }
    board[r][c] = "T";
    for (const [dr, dc] of directions) {
      const newRow = dr + r;
      const newCol = dc + c;

      dfs(newRow, newCol);
    }
  };

  // traverse border and find unsurrounded regions (0 to T)
  for (let r = 0; r < maxRows; r++) {
    for (let c = 0; c < maxCols; c++) {
      if (
        board[r][c] === "O" &&
        (r === 0 || r === maxRows - 1 || c === 0 || c === maxCols - 1)
      ) {
        console.log(`${r},${c}`);
        dfs(r, c);
      }
    }
  }

  // traverse matrix and turn all 0's to X's & set T's to O's

  for (let r = 0; r < maxRows; r++) {
    for (let c = 0; c < maxCols; c++) {
      if (board[r][c] === "T") {
        board[r][c] = "O";
        console.log("did");
      } else {
        board[r][c] = "X";
        console.log("i");
      }
    }
  }

  return board;
};

console.log(
  surroundedRegions([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);
