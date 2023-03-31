/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid) return 0;

  let rows = grid.length;
  let cols = grid[0].length;
  const visit = new Set();
  let islands = 0;

  // dfs logic
  const dfs = (r, c) => {
    // break case
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === "0" ||
      visit.has(`${r},${c}`)
    ) {
      return;
    }

    visit.add(`${r},${c}`); // add to set
    // recurisve call, keep expanding untill we're off the island
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };

  // visit every single position in the grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1" && !visit.has(`${r},${c}`)) {
        // if the current cell / position is a 1, and is not marked as visited , call dfs on the cell and increment number of islands visited
        dfs(r, c);
        islands += 1;
      }
    }
  }
  return islands;
};
