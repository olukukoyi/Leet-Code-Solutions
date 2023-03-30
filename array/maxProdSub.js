const maxProduct = (nums) => {
  let res = Math.max(...nums); // store max num
  let curMin = 1;
  let curMax = 1;
  for (const n of nums) {
    let temp = curMax * n; // store curMax * n in temp
    curMax = Math.max(n * curMax, n * curMin, n); // max allows us to point to current max, its like a refrence to the cur subarray we are iterating over
    curMin = Math.min(temp, n * curMin, n); // keeps track of the minimum sum array of the whole array
    // the min can be either the whole array, or just a small fraction of the array
    res = Math.max(res, curMax); // global result, where we compare of res and max and return the greater val
    console.log(curMax);
  }
  return res;
};

console.log(maxProduct([2, 3, -2, 4]));
