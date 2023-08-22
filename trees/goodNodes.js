const goodNodes = (root) => {
  let good = 0;
  const dfs = (node, maxVal) => {
    if (!node) return;
    if (node.val >= maxVal) {
      good += 1;
      maxVal = node.val;
    }

    dfs(node.left, maxVal);
    dfs(node.right, maxVal);
  };

  dfs(root, -Infinity);
  return good;
};
