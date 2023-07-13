// code doesnt work, this is just a template for psuedo code
// if you whiteboard and follow this approach, you will understand the algo

const quicksort = (arr, l, h) => {
  if (l < h) {
    let j = partition(arr, l, h);
    quicksort(arr, l, j - 1);
    quicksort(arr, j + 1, h);
  }
  return arr;
};

const partition = (arr, l, h) => {
  let i = l;
  let j = h;
  let pivot = arr[l];

  while (i < arr.length) {
    while (arr[i] < pivot) {
      i++; // find greater val
    }
    while (arr[j] > pivot) {
      j--; // find smaller val
    }
    if (i < j) {
      // if didn't cross, swap val at index
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    // if they did cross , if statement above wont run, so we will swap arr[j] with pivot instead
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    pivot = arr[j];
  }

  return j;
};

const arr = [4, 3, 6, 5, 7];

console.log(quicksort(arr, 0, arr.length));
