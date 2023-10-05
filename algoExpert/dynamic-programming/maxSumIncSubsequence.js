function maxSumIncreasingSubsequence(array) {
  // same algo for LIS , but we store max sum instead max length

  const dp = array.map((num) => num);

  dp[array.length - 1] = array[array.length - 1];
  const sequences = new Array(array.length).fill(null);
  let maxIdx = array.length - 1;

  // helpers

  const getSeqeucnes = () => {
    const res = [];
    let curIdx = maxIdx;

    while (curIdx !== null) {
      console.log(array[curIdx]);
      res.push(array[curIdx]);
      curIdx = sequences[curIdx];
    }
    return res;
  };

  // include exclude
  // include : dp[j] + arr[i] => arr[i] is the current number , dp[j] is the cached sum of a different subsequence.
  // in other words, including the current val into subsqeuence

  // exclude : dp[i] => do not include the current value in sum

  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < array.length; j++) {
      let include = dp[j] + array[i];
      let exclude = dp[i];
      if (array[i] < array[j] && include > exclude) {
        dp[i] = include;
        sequences[i] = j;
      }
    }
    // update maxIdx if we have a new max idx
    if (dp[i] >= dp[maxIdx]) {
      console.log("hi");
      maxIdx = i;
    }
  }
  return [dp[maxIdx], getSeqeucnes()];
}
