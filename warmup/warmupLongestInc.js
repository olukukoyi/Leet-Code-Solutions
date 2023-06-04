const warmupLongestInc = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const map = {};

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dfs = (r, c) => {
    const key = `${r},${c}`;
    if (map[key]) return map[key]; // if cached, return it

    let longest = 1;
    for (const [dr, dc] of directions) {
      const newRow = dr + r;
      const newCol = dc + c;
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        matrix[newRow][newCol] > matrix[r][c] // new val grater than prev
      ) {
        // if in bounds and curr is greater than prev, keep calling dfs on neighboring nodes and comparing max
        longest = Math.max(longest, 1 + dfs(newRow, newCol));
        // +1 to include the current number to the path length
      }
    }

    map[key] = longest;
    return longest; // return the longest path length for the current cell
  };

  let maxPath = 1;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const longestPath = dfs(r, c);
      maxPath = Math.max(maxPath, longestPath);
    }
  }
  return maxPath;
};
