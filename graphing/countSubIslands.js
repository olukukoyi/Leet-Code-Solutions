const countSubIslands = (grid1, grid2) => {
  // trick: we can keep track of something being true or false in a dfs call , using the same  method to keep track of min and max
  // if something is false, it equals 0
  // if something is true, it equals 1

  // to keep track if soemthing is false
  //res = true
  // recursive cal ..... res=  math.min(res,dfs(all directions))
  // if it is false, res would always = 0
  // if it is never false, it would always equal 1 :)
  const maxRows = grid1.length;
  const maxCols = grid1[0].length;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const visit = new Set();

  const dfs = (r, c) => {
    if (
      r < 0 ||
      r >= maxRows ||
      c < 0 ||
      c >= maxCols ||
      visit.has(`${r},${c}`) ||
      grid2[r][c] === 0
    ) {
      return true;
    }

    visit.add(`${r},${c}`);

    // only false if g1 === 0 and g2 === 1

    let res = true;
    if (grid1[r][c] === 0 && grid2[r][c] === 1) {
      res = false;
    }

    for (const [dr, dc] of directions) {
      const newRow = dr + r;
      const newCol = dc + c;

      res = Math.min(dfs(newRow, newCol), res); // i like this one better

      // res = dfs(newRow, newCol) && res;
      // compare future dfs call with current res, if both is true return true, if one is false and the other is true, return false
    }
    return res;
  };

  let count = 0;
  for (let r = 0; r < maxRows; r++) {
    for (let c = 0; c < maxCols; c++)
      if (grid2[r][c] && !visit.has(`${r},${c}`) && dfs(r, c)) {
        count += 1;
      }
  }
  return count;
};

console.log(
  countSubIslands(
    [
      [1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
    ],
    [
      [1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1],
      [0, 1, 0, 0, 0],
      [1, 0, 1, 1, 0],
      [0, 1, 0, 1, 0],
    ]
  )
);
