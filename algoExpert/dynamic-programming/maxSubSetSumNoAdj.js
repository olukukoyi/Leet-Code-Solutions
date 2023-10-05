function maxSubsetSumNoAdjacent(array) {
  // arr: [7,10,12,7,9,14]
  // maxSum : [-I, -I, -I, -I, -I, -I]
  //[7, -I, -I, -I, -I, -I]

  if (!array.length > 0) return 0;

  const maxSum = new Array(array.length).fill(-Infinity);
  maxSum[0] = array[0];
  maxSum[1] = Math.max(array[0], array[1]);

  for (let i = 2; i < array.length; i++) {
    maxSum[i] = Math.max(maxSum[i - 1], maxSum[i - 2] + array[i]);
  }

  console.log(maxSum);
  return maxSum[array.length - 1];
}

// Do not edit the line below.
