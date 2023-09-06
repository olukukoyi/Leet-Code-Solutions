function mergeBinaryTrees(tree1, tree2) {
  const dfs = (n1, n2) => {
    if (!n1 && !n2) return null;
    if (!n1) return n2;
    if (!n2) return n1;

    const sum = n1.value + n2.value;
    const merged = new BinaryTree(sum);

    merged.left = dfs(n1.left, n2.left);
    merged.right = dfs(n1.right, n2.right);

    return merged;
  };

  return dfs(tree1, tree2);
}
