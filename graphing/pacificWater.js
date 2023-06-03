const pacificAtlantic = (heights) => {
  // in a 2d array, rows go vertically and columns go horizontally
  const rows = heights.length;
  const cols = heights[0].length;

  const atl = new Set();
  const pac = new Set();

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dfs = (r, c, visit, prevHeight) => {
    // break case
    if (
      visit.has(`${r},${c}`) ||
      r < 0 ||
      c < 0 ||
      r === rows ||
      c === cols ||
      heights[r][c] < prevHeight
    ) {
      return;
    }
    // recursive call
    visit.add(`${r},${c}`);
    for (const [dr, dc] of directions) {
      const newRow = dr + r;
      const newCol = dc + c;

      dfs(newRow, newCol, visit, heights[r][c]);
    }
  };

  // iterating over colums of rows
  for (let c = 0; c < cols; c++) {
    dfs(0, c, pac, heights[0][c]); // first row (top to bottoem)
    dfs(rows - 1, 0, atl, heights[rows - 1][c]); // last row (bottom to top)
  }

  // iterating over rows of cols

  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pac, heights[r][0]);
    dfs(r, cols - 1, atl, heights[r][cols - 1]);
  }

  const res = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (atl.has(`${r},${c}`) && pac.has(`${r},${c}`)) {
        res.push([r, c]);
      }
    }
  }

  return res;
};
