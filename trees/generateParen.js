// only add open paranthesis if open < n
// only add closed paranthesis if closed < open
// valie iif open === closed === n
const generateParenthesis = (n) => {
  let stack = []; // global stack
  let res = [];

  const backtrack = (openCount, closedCount) => {
    if (openCount === closedCount && openCount === n) {
      // if we have 3 open and 3 closed , return the current paranethesis
      res.push(stack.join(""));
      return;
    }
    if (openCount < n) {
      stack.push("(");
      backtrack(openCount + 1, closedCount);
      stack.pop();
    }
    if (closedCount < openCount) {
      stack.push(")");
      backtrack(openCount, closedCount + 1);
      stack.pop();
    }
  };
  backtrack(0, 0);
  return res;
};
