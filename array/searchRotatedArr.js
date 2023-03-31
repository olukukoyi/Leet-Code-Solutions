var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid; // break case
    // determining the sorted side
    if (nums[left] <= nums[mid]) {
      // if true, the left side is the sorted side
      // --
      //checking if target is in the range of the left side side
      if (nums[left] <= target && target < nums[mid]) {
        // nums[left] <= target <= nums[mid]
        // if this is true, search the left side
        right = mid - 1;
      } else {
        // if this is true, search the right side

        left = mid + 1;
      }
    } else {
      // mirror, this means right is the sorted side
      // checking if target is in the range of the right side
      if (nums[mid] < target && target <= nums[right]) {
        // nums[mid]< target < nums[right] nums[mid]> target
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
