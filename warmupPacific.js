var longestIncreasingPath = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const map = {};

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dfs = (r, c, prevVal) => {
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      matrix[r][c] <= prevVal // new val grater than prev
    ) {
      return 0;
    }
    const key = `${r},${c}`;

    if (map[key]) return map[key]; // if cached, return it

    let longest = 1;
    for (const [dr, dc] of directions) {
      const newRow = dr + r;
      const newCol = dc + c;
      longest = Math.max(longest, 1 + dfs(newRow, newCol, matrix[r][c]));
    }
    map[key] = longest;
    return longest; // return the longest path length for the current cell
  };

  let maxPath = 1;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const longestPath = dfs(r, c, -Infinity);
      maxPath = Math.max(maxPath, longestPath);
    }
  }
  return maxPath;
};
