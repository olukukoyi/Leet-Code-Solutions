var canJump = function (nums) {
  const dp = new Array(nums.length).fill(false);
  dp[nums.length - 1] = true;

  let goal = nums.length - 1; // the index to point to the last true value in nums

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      dp[i] = true;
      goal = i;
    }
  }

  console.log(dp[0]);
  return dp[0];
};
