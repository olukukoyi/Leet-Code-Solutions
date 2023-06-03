const pacificAtlantic = (heights) => {
  const rows = heights.length;
  const cols = heights[0].length;
  const atl = new Set();
  const pac = new Set();

  const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const dfs = (r, c, visit, prevVal) => {
    // breakcase    if out of bounds or already visited or less than prev , return
    if (
      r < 0 ||
      r === rows ||
      c < 0 ||
      c === cols ||
      visit.has(`${r},${c}`) ||
      heights[r][c] < prevVal
    ) {
      return;
    }

    // dfs call
    visit.add(`${r},${c}`);
    for (const [dr, dc] of direction) {
      const newRow = dr + r;
      const newCol = dc + c;
      dfs(newRow, newCol, visit, heights[r][c]);
    }
  };

  // dfs from pacific to atlantic (top to bottom)
  for (let c = 0; c < cols; c++) {
    dfs(0, c, pac, heights[0][c]);
    dfs(rows - 1, c, atl, heights[rows - 1][c]);
  }
  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pac, heights[r][0]);
    dfs(r, cols - 1, atl, heights[r][cols - 1]);
  }
  // dfs from pacific to atlantic (left to right)

  // brute force to check if in sets
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

const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];

console.log(pacificAtlantic(heights));
