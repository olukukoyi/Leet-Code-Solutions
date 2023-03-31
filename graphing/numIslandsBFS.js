/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const visit = new Set();
  let islands = 0;

  // bfs logic
  const bfs = (r, c) => {
    const q = [[r, c]];
    visit.add(`${r},${c}`);

    while (q.length) {
      const [row, col] = q.shift();

      // check adjacent positions of the current cell
      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
      for (const [dr, dc] of directions) {
        const newR = row + dr;
        const newC = col + dc;

        // checks if the adjacent position is in bounds, an island, and not visited
        if (
          newR >= 0 &&
          newR < rows &&
          newC >= 0 &&
          newC < cols &&
          grid[newR][newC] === "1" &&
          !visit.has(`${newR},${newC}`)
        ) {
          q.push([newR, newC]);
          visit.add(`${newR},${newC}`);
        }
      }
    }
  };

  // visit every single position in the grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1" && !visit.has(`${r},${c}`)) {
        // if the current cell / position is a 1, and is not marked as visited , call bfs on the cell and increment number of islands visited
        bfs(r, c);
        islands += 1;
      }
    }
  }
  return islands;
};
