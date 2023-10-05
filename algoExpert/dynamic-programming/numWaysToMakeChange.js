function numberOfWaysToMakeChange(n, denoms) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (const c of denoms) {
    for (let a = 1; a < n + 1; a++) {
      if (c <= a) {
        dp[a] = dp[a] + dp[a - c];
      }
    }
  }

  // check if last number was changed => if it was, we found a valid way to make change
  if (dp[n] !== 0) {
    return dp[n];
  } else {
    return 0;
  }
}

// Do not edit the line below.
