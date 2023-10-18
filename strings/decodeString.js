var decodeString = function (s) {
  const stack = [];

  for (const char of s) {
    if (char !== "]") {
      stack.push(char);
      continue;
    }

    // getting string from bracket []
    let cur = stack.pop();
    let str = "";
    while (cur != "[") {
      str = cur + str;
      cur = stack.pop();
    }

    // getting the interger
    let num = "";
    cur = stack.pop();
    while (!Number.isNaN(Number(cur))) {
      num = cur + num;
      cur = stack.pop();
    }
    stack.push(cur);
    // stack.push(str.repeat(Number(num)));
    for (let i = 0; i < Number(num); i++) {
      stack.push(str);
    }
  }
  return stack.join("");
};
