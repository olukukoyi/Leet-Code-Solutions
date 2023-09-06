function branchSums(root) {
  const res = [];

  const dfs = (node, sum) => {
    if (!node) return;

    sum += node.value; // update sum

    if (!node.right && !node.left) {
      // if leaf
      res.push(sum);
    }

    // recursive call
    dfs(node.left, sum);
    dfs(node.right, sum);
  };

  dfs(root, 0);
  return res;
}
