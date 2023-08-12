const numIslands = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;

  // bfs approach

  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  const visit = new Set();

  const dfs = (r, c) => {
    if (visit.has(`${r},${c}`)) return false;

    visit.add(`${r},${c}`);

    for (const [dr, dc] of directions) {
      let newRow = r + dr;
      let newCol = c + dc;

      // if in bounds and is an island
      if (
        newRow < rows &&
        newRow >= 0 &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] === "1"
      ) {
        dfs(newRow, newCol);
      }
    }
  };

  islands = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1" && !visit.has(`${r},${c}`)) {
        islands += 1;
        dfs(r, c);
      }
    }
  }

  return islands;
};

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
