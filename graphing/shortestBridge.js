const shortestBridge = (grid) => {
  const maxRows = grid.length;
  const maxCols = grid[0].length;

  // since we're using bfs and dfs, create a helper function to find out if the cell is in bound

  const outOfBounds = (r, c) => {
    return r < 0 || r >= maxRows || c < 0 || c >= maxCols;
  };

  // calling dfs to find entire island

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const visit = new Set();
  const q = [];

  // goal is to find the entire island (1's) , only fine 1 full island
  const dfs = (r, c) => {
    if (outOfBounds(r, c) || visit.has(`${r},${c}`) || grid[r][c] !== 1) {
      return false;
    }
    visit.add(`${r},${c}`);
    q.push([r, c]);

    for (const [dr, dc] of directions) {
      const newRow = dr + r;
      const newCol = dc + c;

      dfs(newRow, newCol);
    }
  };

  const bfs = () => {
    let flips = 0;
    while (q.length > 0) {
      let size = q.length;

      for (let i = 0; i < size; i++) {
        const [r, c] = q.shift();

        for (const [dr, dc] of directions) {
          const newRow = dr + r;
          const newCol = dc + c;

          if (outOfBounds(newRow, newCol) || visit.has(`${newRow},${newCol}`)) {
            continue;
          }

          if (grid[newRow][newCol]) {
            return flips;
          }

          visit.add(`${newRow},${newCol}`);
          q.push([newRow, newCol]);
        }
      }
      flips += 1;
    }
  };

  for (let r = 0; r < maxRows; r++) {
    for (let c = 0; c < maxCols; c++) {
      if (grid[r][c] === 1) {
        dfs(r, c);
        return bfs();
      }
    }
  }
};

console.log(
  shortestBridge([
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 1],
  ])
);
