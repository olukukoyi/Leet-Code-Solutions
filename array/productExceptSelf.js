const productExecptSelf = (nums) => {
  // initialize array and let it have same length as nums and fill everything with 1s
  const res = new Array(nums.length).fill(1);
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix; // putting prefix in res
    prefix = prefix * nums[i]; // update prefix with current num and old prefix val
  }
  let postfix = 1;
  let end = nums.length - 1;
  for (let i = end; i >= 0; i--) {
    res[i] = res[i] * postfix;
    postfix *= nums[i];
  }
  return res;
};

console.log(productExecptSelf([1, 2, 3, 4]));
