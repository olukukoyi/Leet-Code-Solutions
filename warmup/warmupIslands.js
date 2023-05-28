const numIslands = (grid) => {
  // global vars (boundaries) for bfs and intiials bfs call

  const maxRows = grid.length;
  const maxCols = grid[0].length;
  const visitSet = new Set(); // keeps track of islands we visited

  // bfs (uses queues for iteration)
  const bfs = (r, c) => {
    const q = [[r, c]]; // initi queue
    visitSet.add(`${r},${c}`); // add to visit set

    //directions dictionary
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    //recurisve call
    while (q.length) {
      const [row, col] = q.shift();

      for (const [dR, dC] of directions) {
        const newRow = dR + row; // expansion
        const newCol = dC + col; // expansion

        // check cases and add to set and q accordingly
        if (
          newRow >= 0 &&
          newRow < maxRows && //0 -> n-1 index
          newCol >= 0 &&
          newCol < maxCols && // 0 -> n-1 index
          grid[newRow][newCol] === "1" &&
          !visitSet.has(`${newRow},${newCol}`)
        ) {
          visitSet.add(`${newRow},${newCol}`);
          q.push([newRow, newCol]);
        }
      }
    }
  };

  // initial bfs call
  let islandCount = 0;
  for (let r = 0; r < maxRows; r++) {
    for (let c = 0; c < maxCols; c++) {
      // if we touch an island and its not in visited set
      if (grid[r][c] === "1" && !visitSet.has(`${r},${c}`)) {
        bfs(r, c);
        islandCount++;
      }
    }
  }
  return islandCount;
};

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

console.log(numIslands(grid));
