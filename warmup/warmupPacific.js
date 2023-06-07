var pacificAtlantic = function (heights) {
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

  const dfs = (r, c, visit, preVal) => {
    // break cases
    // if out of bounds
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      heights[r][c] < preVal ||
      visit.has(`${r},${c}`)
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

  // dfs top to bottom both sides

  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pac, heights[r][0]);
    dfs(r, cols - 1, atl, heights[r][cols - 1]);
  }

  // dfs left to right both sides

  for (let c = 0; c < cols; c++) {
    dfs(0, c, pac, heights[0][c]);
    dfs(rows - 1, c, atl, heights[rows - 1][c]);
  }

  // brute force to check if both sets

  const res = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pac.has(`${r},${c}`) && atl.has(`${r},${c}`)) {
        res.push([r, c]);
      }
    }
  }
  return res;
};
