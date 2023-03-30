const productOfItSelf = (nums) => {
  const res = new Array(nums.length).fill(1);
  // prefix logic
  let prefix = 1;
  // producrt of all the nums before it
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix; // updating res array
    prefix = prefix * nums[i];
  }
  // postfix logic
  // at this time, we have this arr => [ 1, 1, 2, 6 ]
  // eat each index, it represents the prduct of the number before. now we must multiple each number by the number after
  let postfix = 1;
  let end = nums.length - 1;
  // product of all the nums after it and before it => res = post * prefix
  // kepe in mind, by the time of we get to this array, res = prefix, so doing res * post, is just multiplying the numbers before and after which gives us the result we need for our output
  for (let i = end; i >= 0; i--) {
    res[i] = res[i] * postfix;
    postfix *= nums[i];
  }
  return res;
};

console.log(productOfItSelf([1, 2, 3, 4]));
