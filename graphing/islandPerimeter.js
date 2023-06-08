const islandPerimeter = (grid) => {
  // dfs until we're out of bounds, if we're out of bounds, +1
  // if we visited return +0

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

    let sum = 0;
    for (const [dr, dc] of directions) {
      const newRow = dr + r;
      const newCol = dc + c;
      sum += dfs(newRow, newCol);
    }
    return sum;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // 1 island, 1 path, so once we find a start, call dfs from there and rerturn the val from there
      if (grid[r][c] === 1) {
        return dfs(r, c);
      }
    }
  }
};

const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

console.log(islandPerimeter(grid));
