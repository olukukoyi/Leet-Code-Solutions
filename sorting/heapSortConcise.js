const heapSort = (arr) => {
  let n = arr.length;
  buildMaxHeap(arr, n);
  // after we build max heap, we will sort
  for (let i = n - 1; i > 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapify(arr, i, 0);
    // pass in array, current size and current root
  }
  return arr;
};

const buildMaxHeap = (arr, n) => {
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    heapify(arr, n, i);
  }
};

const heapify = (arr, n, i) => {
  let largest = i; // parent
  let left = 2 * i + 1; // left node
  let right = 2 * i + 2; // right node

  if (left < n && arr[left] > arr[largest]) {
    // if left is in bounds and greater than largest
    largest = left; // change pointer
  }

  if (right < n && arr[right] > arr[largest]) {
    // if right is in bounds and arr[right] > arr[largest]
    largest = right;
  }

  if (largest !== i) {
    // largest changed , swap arr[larg] and arr[i]
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    heapify(arr, n, largest); // recheck if tree is correct
  }
};

console.log(heapSort([2, 8, 5, 3, 9, 1]));
