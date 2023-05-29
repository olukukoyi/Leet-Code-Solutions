const numberOfIsland = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const visitSet = new Set();

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const bfs = (r, c) => {
    const q = [[r, c]];
    visitSet.add(`${r},${c}`);

    // expanding vals in queue
    while (q.length) {
      // make sure we're only working with the new cords here
      const [row, col] = q.shift();

      for (const [dr, dc] of directions) {
        const newRow = dr + row;
        const newCol = dc + col;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          matrix[newRow][newCol] === "1" &&
          !visitSet.has(`${newRow},${newCol}`)
        ) {
          visitSet.add(`${newRow},${newCol}`);
          q.push(newRow, newCol);
        }
      }
    }
  };

  let numIslands = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === "1" && !visitSet.has(`${r},${c}`)) {
        bfs(r, c);
        numIslands += 1;
      }
    }
  }
  return numIslands;
};

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(numberOfIsland(grid));
