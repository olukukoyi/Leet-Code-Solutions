const orangesRotting = (grid) => {
  const maxRows = grid.length;
  const maxCols = grid[0].length;
  const q = []; // queue for BFS
  let fresh = 0;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  // get number of fresh and get sources

  for (let r = 0; r < maxRows; r++) {
    for (let c = 0; c < maxCols; c++) {
      if (grid[r][c] === 1) {
        fresh += 1;
      }
      if (grid[r][c] === 2) {
        q.push([r, c]);
      }
    }
  }

  // perform bfs
  let time = 0;

  while (q.length > 0 && fresh > 0) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let [r, c] = q.shift();

      // call bfs of neigbors , if neighbor is fresh, and is in bounds, mark as rotten and add to q

      for (const [dr, dc] of directions) {
        const newRow = dr + r;
        const newCol = dc + c;

        if (
          newRow < 0 ||
          newRow >= maxRows ||
          newCol < 0 ||
          newCol >= maxCols ||
          grid[newRow][newCol] !== 1
        ) {
          continue;
        }

        grid[newRow][newCol] = 2; // mark as rotten
        q.push([newRow, newCol]);
        fresh -= 1;
      }
    }
    time += 1;
  }

  if (fresh === 0) {
    return time;
  } else {
    return -1;
  }
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
