const pacificAtlantic = (heights) => {
  const maxRows = heights.length;
  const maxCols = heights[0].length;

  const pac = new Set();
  const atl = new Set();

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dfs = (r, c, visit, prevVal) => {
    if (
      visit.has(`${r},${c}`) ||
      r < 0 ||
      r >= maxRows ||
      c < 0 ||
      c >= maxCols ||
      heights[r][c] < prevVal // we want prevVal to be greater then current
    ) {
      return false;
    }

    visit.add(`${r},${c}`);

    for (const [dr, dc] of directions) {
      const newRow = dr + r;
      const newCol = dc + c;

      // if in bounds AND nei > curr
      dfs(newRow, newCol, visit, heights[r][c]);
    }
  };

  // for rows (height of matrix , top to bottom)
  for (let r = 0; r < maxRows; r++) {
    dfs(r, 0, pac, heights[r][0]); // pacific
    dfs(r, maxCols - 1, atl, heights[r][maxCols - 1]); // atlantic
  }

  // for cols (length of matrix)
  for (let c = 0; c < maxCols; c++) {
    dfs(0, c, pac, heights[0][c]); // pacifc
    dfs(maxRows - 1, c, atl, heights[maxRows - 1][c]); // atlantic
  }

  const res = [];
  for (let r = 0; r < maxRows; r++) {
    for (let c = 0; c < maxCols; c++) {
      if (pac.has(`${r},${c}`) && atl.has(`${r},${c}`)) {
        res.push([r, c]);
      }
    }
  }

  console.log(res);
  return res;
};

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
