function minNumberOfCoinsForChange(n, denoms) {
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  // sub problem and traverserses each coin
  // min(include , exclude)

  for (let a = 1; a < n + 1; a++) {
    for (const c of denoms) {
      if (c <= a) {
        dp[a] = Math.min(dp[a], 1 + dp[a - c]);
      }
    }
  }

  console.log(dp);

  if (dp[n] != Infinity) {
    return dp[n];
  } else {
    return -1;
  }
}

// Do not edit the line below.
