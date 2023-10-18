var generateParenthesis = function (n) {
  const res = [];
  const dfs = (open, closed, curStr) => {
    if (open === n && closed === n) {
      res.push(curStr);
      return;
    }

    // add to string and do dfs again
    if (open < n) {
      // curStr += "("
      dfs(open + 1, closed, curStr + "(");
    }

    if (closed < open) {
      // curStr += ")"
      dfs(open, closed + 1, curStr + ")");
    }
  };

  dfs(0, 0, "");
  return res;
};
