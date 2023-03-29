const productExecptSelf = (nums) => {
  const res = [1] * nums.length;
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[1] = prefix;
    nums[i] *= prefix;
  }
};

productExecptSelf([1, 2, 3, 4, 5]);
