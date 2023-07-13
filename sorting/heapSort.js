const heapSort = (arr) => {
  let n = arr.length;
  buildMaxHeap(arr, n);
  for (let i = n - 1; i > 0; i--) {
    // swap top with bottom then heapify
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapify(arr, i, 0);
  }
  return arr;
};

const buildMaxHeap = (arr, n) => {
  // call heapify on lasy non-leaf (parent)
  // traverse up tree from there

  for (let i = Math.floor(n / 2); i >= 0; i--) {
    heapify(arr, n, i);
  }
};

const heapify = (arr, n, i) => {
  let largest = i; // just stores the current max (only stores the index)
  let left = 2 * i + 1; // gets left child in sub tree
  console.log(left);
  let right = 2 * i + 2; // gets right child in sub tree

  if (left < n && arr[left] > arr[largest]) {
    largest = left; // if left is larger and in bounds, swap largest with left
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right; // if right is larger and in bounds, swap largest with right
  }

  if (largest !== i) {
    // swapping if largest was changed

    // remember that i is the index of the parent

    // largest is just a var that stores the largest val's index. we init the val to i, but we can init the val to any val we wanted to

    // once we found which one was the largest, we swap the parent with the largest node

    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    heapify(arr, n, largest); // allows us to check if we heapified the tree correctly
  }
};

console.log(heapSort([2, 8, 5, 3, 9, 1]));
