const decimal = (arr) => {
  console.log("running");
  let sum = 0;
  let len = arr.length;
  let j = 0;

  //solution 1
  for (let i = len - 1; i >= 0; i--) {
    sum += Math.pow(2, j) * arr[i];
    j++;
  }
  return sum;
  // solution 2
  //   for (let i = len - 1; i >= 0; i--) {
  //     if (arr[i] === 0) {
  //       j++;
  //       continue;
  //     }

  //     if (arr[i] === 1) {
  //       sum += Math.pow(2, j); //sum = sum 2^i
  //       //   console.log(sum);

  //       console.log(j);
  //       j++;
  //     }
  //   }
};
console.log(decimal([1, 1, 0, 1, 0, 1, 1, 0]));
console.log("test");
