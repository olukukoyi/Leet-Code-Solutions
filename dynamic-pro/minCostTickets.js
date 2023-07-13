var minCostTickets = function (days, costs) {
  const dp = new Array(days.length + 1).fill(Infinity);
  dp[0] = 0; // Set the initial value at index 0 to 0

  const intervals = [1, 7, 30]; // Durations for the tickets

  const zipped = intervals.map((day, index) => [day, costs[index]]); // Pair durations with their respective costs

  for (let i = 1; i <= days.length; i++) {
    for (const [d, c] of zipped) {
      let j = i;
      while (j > 0 && days[j - 1] > days[i - 1] - d) {
        j -= 1;
      }
      dp[i] = Math.min(dp[i], c + dp[j]); // Update the minimum cost for the current day
    }
  }

  return dp[days.length]; // Return the minimum cost for all days
};

console.log(minCostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15])); // Output: 11
