function evaluateExpressionTree(tree) {
  const dfs = (node) => {
    ///b.c : if leaf node , return the value
    // leaf nodes are non negatives
    // so if its not negative we return it

    if (node.value >= 0) {
      return node.value;
    }

    // if it is negative (operator) call dfs
    let left = dfs(node.left);
    let right = dfs(node.right);

    // once we have two leaf nodes aka , two operands , perform the following computations
    // computations
    if (node.value === -1) {
      return left + right;
    }
    if (node.value === -2) {
      return left - right;
    }
    if (node.value === -3) {
      return Math.trunc(left / right);
    }

    return left * right;
  };

  return dfs(tree);
}
