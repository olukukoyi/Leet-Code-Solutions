const longestIncreasingPath = (matrix) => {
  const maxRows = matrix.length;
  const maxCols = matrix[0].length;

  const LIP = {};
  // (r,c) : int

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dfs = (r, c, prevVal) => {
    if (
      r < 0 ||
      r >= maxRows ||
      c < 0 ||
      c >= maxCols ||
      matrix[r][c] <= prevVal
    ) {
      return 0;
    }
    let key = `${r},${c}`;
    if (LIP[key]) return LIP[key];

    // call dfs and update longest path for each cell
    let longest = 1;
    for (const [dr, dc] of directions) {
      const newRow = dr + r;
      const newCol = dc + c;

      longest = Math.max(longest, 1 + dfs(newRow, newCol, matrix[r][c]));
    }

    // create entry after you find longest path
    LIP[key] = longest;
    return longest;
  };

  let res = 1;
  for (let r = 0; r < maxRows; r++) {
    for (let c = 0; c < maxCols; c++) {
      let len = dfs(r, c, -Infinity);
      res = Math.max(res, len);
    }
  }
  return res;
};

console.log(
  longestIncreasingPath([
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1],
  ])
);
