const maxSubArray = (nums) => {
  let maxSub = nums[0];
  let curSum = 0;
  for (let num of nums) {
    // if current sum is negative, set back to 0
    if (curSum < 0) curSum = 0;
    curSum = curSum + num; // adding num to currSum
    maxSub = Math.max(maxSub, curSum); // updating maxSub via Math.max
  }
  return maxSub;
};
