const longestConsecutive = (nums) => {
  const numSet = new Set(nums);
  let res = 0;
  let length = 0;

  for (const num of nums) {
    // check if we found the start of a sequence:    !(n - 1 )
    if (!numSet.has(num - 1)) {
      // start seqeucne iteration
      length = 0;
      while (numSet.has(num + length)) {
        // while next number exist in numSet
        length++;
      }
      res = Math.max(res, length);
    }
  }
  return res;
};
