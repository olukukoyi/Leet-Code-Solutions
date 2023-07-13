const insertion = (arr) => {
  let j;
  for (let i = 0; i < arr.length; i++) {
    j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      // condition : if prev is greater than cur , we swap and move pointers
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j -= 1;
    }
  }
  return arr;
};

console.log(insertion([2, 8, 5, 3, 9, 4]));
