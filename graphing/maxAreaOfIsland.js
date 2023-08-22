const maxAreaOfIsland = (grid) => {
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
    if (
      r < 0 ||
      r >= maxRows ||
      c < 0 ||
      c >= maxCols ||
      visit.has(`${r},${c}`) ||
      grid[r][c] === 0
    ) {
      return 0;
    }

    visit.add(`${r},${c}`);

    area = 1; // initialize area to 1

    for (const [dr, dc] of directions) {
      const newRow = dr + r;
      const newCol = dc + c;

      // iterate over neis and add the returned area to current area
      area += dfs(newRow, newCol); // 1 += neighbors , then return this area
      // samthing as writing return 1 + dfs(on all other directions)
    }

    return area;
  };

  let max = 0;
  for (let r = 0; r < maxRows; r++) {
    for (let c = 0; c < maxCols; c++) {
      if (grid[r][c] === 1) {
        max = Math.max(max, dfs(r, c));
      }
    }
  }

  return max;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 1],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ])
);
