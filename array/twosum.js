const twoSum = (nums, target) => {
  const hash = {};

  let i = 0;
  while (i < nums.length) {
    let val = nums[i]; // get val
    hash[val] = i; // store in hash and set val as the index
    i++;
  }
  i = 0;
  while (i < nums.length) {
    let pK = target - nums[i];
    if (hash[pK] && hash[pK] !== i) {
      return [i, hash[pK]];
    }
    i++;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

// target = 9

// pK = target -  nums[i] // pK = 9 - 2 // pk = 7
// if(hash[pK]) && if(hash[pK] !== i) // not the same index
// return [i,pk]
