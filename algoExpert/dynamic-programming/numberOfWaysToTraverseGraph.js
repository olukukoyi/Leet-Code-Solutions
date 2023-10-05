function numberOfWaysToTraverseGraph(width, height) {
  const dp = new Array(height).fill(0).map(() => new Array(width).fill(0));

  // rows : height
  // cols : length

  for (let r = 0; r < height; r++) {
    dp[r][0] = 1;
  }

  for (let c = 0; c < width; c++) {
    dp[0][c] = 1;
  }

  for (let row = 1; row < height; row++) {
    for (let col = 1; col < width; col++) {
      dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
    }
  }

  console.log(dp);
  return dp[height - 1][width - 1];
}
