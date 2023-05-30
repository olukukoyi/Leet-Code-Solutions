const longestIncPath = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const map = {}; // caching vals

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const bfs = (r, c) => {
    const key = `${r},${c}`;

    if (map[key]) return map[key];

    // execute bfs
    let longestPath = 1;
    for (const [dr, dc] of directions) {
      const newRow = dr + r;
      const newCol = dc + c;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        matrix[newRow][newCol] > matrix[r][c]
      ) {
        longestPath = Math.max(longestPath, 1 + bfs(newRow, newCol));
      }
    }
    // logic when we come back up
    map[key] = longestPath; // maps to key
    return longestPath; // returns path to neighboring nodes then to result
  };

  let result = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      result = Math.max(result, bfs(r, c));
    }
  }
  return result;
};

const matrix = [
  [9, 9, 4],
  [6, 6, 8],
  [2, 1, 1],
];

console.log(longestIncPath(matrix));
