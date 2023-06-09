const islandPerimeter = (grid) => {
  // determine perimeter on island
  // call dfs on each cell , if the adjacent cell is water or out of bounds , plus one to perimeter
  // problem: island perimenter

  const rows = grid.length;
  const cols = grid[0].length;

  const visit = new Set();
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dfs = (r, c) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
      return 1;
    }
    if (visit.has(`${r},${c}`)) {
      return 0;
    }
    visit.add(`${r},${c}`);

    let perimenter = 0;
    for (const [dr, dc] of directions) {
      const newRow = dr + r;
      const newCol = dc + c;

      perimenter += dfs(newRow, newCol);
    }

    return perimenter;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        return dfs(r, c);
      }
    }
  }
};
