const tripleStep = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 4;

  let p1 = 1;
  let p2 = 2;
  let p3 = 4;
  let cur = 0;

  for (let i = 4; i <= n; i++) {
    cur = p1 + p2 + p3;
    p3 = p2;
    p2 = p1;
    p1 = cur;
  }

  return cur;
};
