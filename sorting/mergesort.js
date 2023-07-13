const mergesort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  left = mergesort(left);
  right = mergesort(right);
  return merge(left, right);
};

const merge = (left, right) => {
  // lef and right are two sub arrays

  const res = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    // gets whatever is left and throw in the array
    res.push(left[i]);
    i++;
  }

  while (j < right.length) {
    // gets whatever is left and throw in the array
    res.push(right[j]);
    j++;
  }

  return res;
};

console.log(mergesort([15, 5, 10, 3, 7]));
