const climb = (n) => {
  // [0 ....  n -1 (one) , n (two)]

  let one = 1;
  let two = 1;

  for (i = 0; i < n - 1; i++) {
    let temp = one;
    one += two;
    two = temp;
  }

  return one;
};

console.log(climb(4));
