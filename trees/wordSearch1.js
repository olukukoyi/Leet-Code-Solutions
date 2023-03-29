var exist = function (board, word) {
  let rows = board.length; // counts the amount of sub arrays
  let cols = board[0].length; // counts the length of the first sub array
  const path = new Set();

  const dfs = (r, c, i) => {
    // break cases
    if (i === word.length) return true;
    if (
      // out of bands, char in word != to current char on board, or if tuple already in back
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      word[i] != board[r][c] ||
      path.has(`${r},${c}`)
    ) {
      return false;
    }
    // if no break cases are hit...
    path.add(`${r},${c}`); // add tuple to path
    let res =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    path.delete(`${r},${c}`);
    return res;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }
  return false;
};
