const longestIncreasingPath = (matrix) => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;
  const dp = {}; // (r,c) => LIP
  let maxPath = 1;

  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0], // up
  ];

  const dfs = (r, c) => {
    const key = `${r},${c}`; // Creating a unique key for each cell

    // if exist in LIP, return it
    if (dp[key]) {
      return dp[key];
    }

    // else, compute LIP
    let pathLength = 1; // init pathLength to 1
    for (const [dr, dc] of directions) {
      const newRow = r + dr; // expansion
      const newCol = c + dc; // expansion
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        matrix[newRow][newCol] > matrix[r][c] // new val grater than prev
      ) {
        // if in bounds and curr is greater than prev, keep calling dfs on neighboring nodes and comparing max
        pathLength = Math.max(pathLength, 1 + dfs(newRow, newCol));
        // +1 to include the current number to the path length
      }
    }

    dp[key] = pathLength;
    return pathLength;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      maxPath = Math.max(maxPath, dfs(r, c));
    }
  }

  return maxPath;
};

const matrix = [
  [9, 9, 4],
  [6, 6, 8],
  [2, 1, 1],
];

console.log(longestIncPath(matrix));
