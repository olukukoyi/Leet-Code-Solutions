const diameter = (root) => {
  let res = 0;

  const dfs = (node) => {
    if (!node) {
      return -1;
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    // 2 + l + r : computes diamter

    res = Math.max(res, 2 + left + right);

    return 1 + Math.max(left, right);
  };
  dfs(root);

  return res;
};
