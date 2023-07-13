const algo = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  const bs = (left, right) => {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] > target) {
      return bs(left, mid - 1);
    } else if (arr[mid] < target) {
      return bs(mid + 1, right);
    } else return -1;
  };

  return bs(left, right);
};

console.log(algo([3, 5, 7, 8, 9, 12], 12));
