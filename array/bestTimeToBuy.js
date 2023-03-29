const maxProfit = (prices) => {
  let left = 0; // buying
  let right = 1; // selling
  let maxP = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // grabbing current profit
      maxP = Math.max(maxP, profit); // comparing max's
    } else {
      left = right;
    }
    right++;
  }
};
