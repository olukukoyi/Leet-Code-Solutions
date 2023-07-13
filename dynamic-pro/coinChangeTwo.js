const change = (amount, coins) => {
  // construct dp
  const dp = new Array(coins.length + 1)
    .fill(0)
    .map(() => new Array(amount + 1).fill(0));

  dp[0][0] = 1;

  for (let c = 1; c <= coins.length; c++) {
    // coins
    for (let s = 0; s <= amount; s++) {
      // target aka subtarget
      dp[c][s] = dp[c - 1][s]; // getting excluded val
      if (s - coins[c - 1] >= 0) {
        // sub - prev coin
        dp[c][s] += dp[c][s - coins[c - 1]]; // if true, include
      }
    }
  }
  return dp[coins.length][amount];
};

console.log(change(3, [1, 2, 3]));
