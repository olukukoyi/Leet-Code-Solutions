var maxDotProduct = function (nums1, nums2) {
  const dp = new Array(nums1.length + 1)
    .fill(-Infinity)
    .map(() => new Array(nums2.length + 1).fill(-Infinity));

  for (let r = 1; r <= nums1.length; r++) {
    for (let c = 1; c <= nums2.length; c++) {
      let top = Math.max(dp[r - 1][c]); // 1 int less from num1
      let left = Math.max(dp[r][c - 1]); // 1 int less from num2
      let dotProduct = Math.max(
        Math.max(dp[r - 1][c - 1], 0) + nums1[r - 1] * nums2[c - 1]
      ); // dot prouct of current nums in num1    and num2
      dp[r][c] = Math.max(top, left, dotProduct); // stop max sum of the combinations
    }
  }

  console.log(dp);
  // if( dp[nums1.length][nums2.length] === 0 ) return -1
  return dp[nums1.length][nums2.length];
};
