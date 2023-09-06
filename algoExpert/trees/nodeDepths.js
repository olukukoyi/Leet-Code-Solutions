function nodeDepths(root) {
  const dfs = (node, depth) => {
    if (!node) return 0;

    let left = dfs(node.left, depth + 1);

    let right = dfs(node.right, depth + 1);

    return depth + left + right;
  };

  return dfs(root, 0);
}
