const exist = (board, word) => {
  const rows = board.length;
  const cols = board[0].length;
  const visit = new Set();

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dfs = (r, c, i) => {
    // breakcases
    if (i === word.length) return true;
    if (
      r < 0 ||
      r === rows ||
      c < 0 ||
      c === cols ||
      visit.has(`${r},${c}`) ||
      word[i] !== board[r][c]
    ) {
      return false;
    }
    // recursive call
    visit.add(`${r},${c}`);
    for (const [dr, dc] of directions) {
      const newRow = dr + r;
      const newCol = dc + c;

      let res = dfs(newRow, newCol, (i += 1));

      visit.delete(`${r},${c}`);

      return res;
    }
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (!dfs(r, c, 0)) return false;
    }
  }
  return true;
};
