var jump = function (array) {
  const dp = new Array(array.length).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (j + array[j] >= i) {
        dp[i] = Math.min(dp[i], dp[j] + 1);
      }
    }
  }

  console.log(dp);
  return dp[array.length - 1];
};
