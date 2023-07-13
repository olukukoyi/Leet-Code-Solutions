const canPartition = (nums) => {
  let numsTot = nums.reduce((sum, num) => sum + num, 0);
  if (numsTot % 2) return false;

  const target = numsTot / 2;
  let dp = new Set();
  dp.add(0);

  for (let i = 0; i < nums.length; i++) {
    const tempSet = new Set();
    for (const val of dp) {
      if (val + nums[i] === target) {
        dp.add(val + nums[i]);
        console.log(dp);

        return true;
      }
      tempSet.add(val + nums[i]);
      tempSet.add(val);
    }
    dp = tempSet;
  }
};

console.log(canPartition([1, 5, 5, 11]));
