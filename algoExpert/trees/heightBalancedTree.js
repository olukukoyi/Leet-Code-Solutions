function heightBalancedBinaryTree(tree) {
  const dfs = (node) => {
    if (!node) return [true, 0];

    let left = dfs(node.left);
    let right = dfs(node.right);

    // balanced?
    let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    return [balanced, 1 + Math.max(left[1], right[1])];
  };

  return dfs(tree)[0];
}
