const longestConsecutive = (nums) => {
  // return longest consecutive sequence
  //[100,4,200,1,3,2]   return longest consecutive sequence
  // iterate and check if theres a sequence
  // if theres no number before it,
  // check if comnsecutive nums exist, if so keep track count
  // hasmap
  const numsSet = new Set();
  let res = 0;
  let tempLength = 0; // as a counter and a way to increment the num and keep track of length

  for (const num of nums) {
    // num-1 !numsMap.has(num-1)
    if (!numsSet.has(num - 1)) {
      // if left neighbor does not exist
      tempLength = 0;
      while (numsSet.has(num + tempLength)) {
        // if its in the hash loop through it
        tempLength++;
      }
      res = Math.max(tempLength, res);
    }
  }
  return res;
};
