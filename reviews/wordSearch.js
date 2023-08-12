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
    if (i === word.length) return true;
    if (
      r === rows ||
      r < 0 ||
      c === cols ||
      c < 0 ||
      board[r][c] !== word[i] ||
      visit.has(`${r},${c}`)
    ) {
      return false;
    }

    visit.add(`${r},${c}`);

    for (const [dr, dc] of directions) {
      const newRow = dr + r;
      const newCol = dc + c;

      let res = dfs(newRow, newCol, i + 1); // double check why we do this

      if (res) return res;
    }
    // backtracking to prev cell

    visit.delete(`${r},${c}`);
    return false;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === word[0]) {
        if (dfs(r, c, 0)) return true; // the min we find the word, return true
      }
    }
  }

  return false;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
