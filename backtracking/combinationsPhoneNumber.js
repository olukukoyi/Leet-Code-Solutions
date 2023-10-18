var letterCombinations = function (digits) {
  const phone_map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  if (digits.length === 0) return [];

  const res = [];
  const dfs = (ptr, curStr) => {
    if (curStr.length === digits.length) {
      res.push(curStr);
      return;
    }

    for (const char of phone_map[digits[ptr]]) {
      dfs(ptr + 1, curStr + char);
    }
  };

  dfs(0, "");
  return res;
};
