const islandPerimeter = (grid) => {
  const maxRows = grid.length;
  const maxCols = grid[0].length;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const visit = new Set();

  const dfs = (r, c) => {
    if (r < 0 || r >= maxRows || c < 0 || c >= maxCols || grid[r][c] === "0") {
      return 1; // if out of bounds or we hit water
    }
    if (visit.has(`${r},${c}`)) {
      return 0; // if we viisted the cell already
    }

    visit.add(`${r},${c}`);

    let perimeter = 0;

    for (const [dr, dc] of directions) {
      let newRow = dr + r;
      let newCol = dc + c;

      perimeter += dfs(newRow, newCol);
    }

    return perimeter;
  };

  for (let r = 0; r < maxRows; r++) {
    for (let c = 0; c < maxCols; c++) {
      if (grid[r][c] === 1) {
        return dfs(r, c);
      }
    }
  }
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
