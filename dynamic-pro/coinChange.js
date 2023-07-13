const coinChange = (amount, coins) => {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let a = 1; a < amount + 1; a++) {
    // for each sub problem, we tap into the coins
    for (const c of coins) {
      if (a - c >= 0) {
        dp[a] = Math.min(dp[a], 1 + dp[a - c]);
      }
    }
  }
  console.log(dp);
  if (dp[amount] != Infinity) {
    return dp[amount];
  } else {
    return -1;
  }
};

console.log(coinChange(7, [1, 3, 4, 5]));
