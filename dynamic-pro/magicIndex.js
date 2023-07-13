const findMagicIndex = (arr) => {
  let low = 0;
  let high = arr.length - 1;

  const bs = (left, right) => {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === mid) return mid;

    if (arr[mid] < mid) {
      return bs(mid + 1, right);
    } else if (arr[mid] > mid) {
      return bs(left, mid);
    } else return -1;
  };

  return bs(low, high);
};
