const longestIncPath = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const map = {};
  let result = 0;

  // dictionary for expansion

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  // bfs
  const bfs = (r, c) => {
    let runningLongestPath = 1;
    const key = `${r},${c}`;

    // break case
    if (map[key]) return map[key]; // if cached, return val
    // expansion
    for (const [dr, dc] of directions) {
      let newRow = r + dr;
      let newCol = c + dc;
      // recusive call
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        matrix[newRow][newCol] > matrix[r][c]
      ) {
        runningLongestPath = Math.max(
          runningLongestPath,
          1 + bfs(newRow, newCol)
        );
      }
    }
    map[key] = runningLongestPath;
    return runningLongestPath;
  };

  // initialoiz bfs call
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      result = Math.max(res, bfs(r, c));
    }
  }
  // global return result
  return result;
};

const matrix = [
  [9, 9, 4],
  [6, 6, 8],
  [2, 1, 1],
];

console.log(longestIncPath(matrix));
