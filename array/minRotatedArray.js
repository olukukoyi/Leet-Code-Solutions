const findMin = (nums) => {
  let res = nums[0];
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    // if l < r, the current array is sorted
    if (nums[l] < nums[r]) {
      res = Math.min(res, nums[l]);
      break;
    }

    let m = (l + r) / 2; // get middle
    res = Math.min(res, nums[m]); // updare res if the new min is less than res

    // --

    // functionality for slicing the array
    if (nums[m] >= nums[l]) {
      l = m + 1; // slicing array if mid greater than left
    } else {
      r = m - 1; // slicing array if mid less than left
    }
  }
  return res;
};

console.log(findMin([4, 3, 2, 1]));
