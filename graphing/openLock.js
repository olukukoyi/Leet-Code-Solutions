const openLock = (deadends, target) => {
  if (deadends.includes("0000")) return -1;

  const children = (code) => {
    const res = [];

    for (let i = 0; i < 4; i++) {
      // add
      let digit = String(parseInt(code[i]) + (1 % 10));

      res.push(code.slice(0, i) + digit + code.slice(i + 1));

      // subtracting

      digit = String(parseInt(code[i] - 1 + (10 % 10)));
      res.push(code.slice(0, i) + digit + code.slice(i + 1));
    }

    return res;
  };

  const visit = new Set(deadends); // visit with deadends
  const q = [];
  q.push("0000");
  let turns = 0;

  while (q.length > 0) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      const code = q.shift();
      if (code === target) {
        return turns;
      }

      for (const child of children(code)) {
        if (!visit.has(child)) {
          visit.add(child);
          q.push(child);
        }
      }
    }
    turns += 1;
  }
  return -1; // if we never reach end of array
};

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"));
