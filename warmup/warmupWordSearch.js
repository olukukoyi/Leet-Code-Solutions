const wordSearch = (board, word) => {
  const rows = board.length;
  const cols = board[0].length;
  const path = new Set(); // store path in this set

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dfs = (r, c, i) => {
    // break case
    if (i === word.length) return true;
    if (
      r < 0 ||
      r === rows ||
      c < 0 ||
      c === cols ||
      path.has(`${r},${c}`) ||
      board[r][c] !== word[i]
    ) {
      return false;
    }

    // store every new cell we touch
    path.add(`${r},${c}`);
    // recursive call , expand

    for (const [dr, dc] of directions) {
      const newRow = dr + r;
      const newCol = dc + c;

      let res = dfs(newRow, newCol, i + 1);
      if (res) return res;
      // if its false, it would back track, if its true, it will return true up call stack
    }

    // backtrack
    path.delete(`${r},${c}`); // remove from stack

    // global return
    return false;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) return true; // if we find a valid path, immediately return true
    }
  }
  return false;
};
