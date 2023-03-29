const containsDuplicate = (nums) => {
  // store in hash as we traverse
  // check if its in hash, if its in hash, check if it appears atleas twice, return false if so,else ++
  // if not in hash, add it
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      // if not in hash, add it
      hash[nums[i]] = 1;
    } else if (hash[nums[i]] >= 1) {
      // if its in hash, check num, if its >=2 return false;
      return true;
    } else {
      hash[nums[i]] = hash[nums[i]] + 1;
    }
  }
  return false;
};
