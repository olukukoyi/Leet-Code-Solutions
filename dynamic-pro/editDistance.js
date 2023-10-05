var minDistance = function (str1, str2) {
  const dp = new Array(str2.length + 1)
    .fill(Infinity)
    .map(() => new Array(str1.length + 1).fill(Infinity));

  // first row and for col , 0 - n

  for (let i = 0; i <= str1.length; i++) {
    dp[0][i] = i;
  }
  for (let j = 0; j <= str2.length; j++) {
    dp[j][0] = j;
  }

  for (let r = 1; r <= str2.length; r++) {
    // string 2 (Y AXIS)
    for (let c = 1; c <= str1.length; c++) {
      // string 1 (x axis)
      if (str1[c - 1] === str2[r - 1]) {
        dp[r][c] = dp[r - 1][c - 1];
      } else {
        dp[r][c] = 1 + Math.min(dp[r][c - 1], dp[r - 1][c], dp[r - 1][c - 1]);
      }
    }
  }

  console.log(dp);
  return dp[str2.length][str1.length];
};
