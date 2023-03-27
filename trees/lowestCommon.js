const lowestCommon = (root, p, pq) => {
  let res = null;
  const dfs = (node) => {
    if (!node) return false;

    let left = dfs(node.left);
    let right = dfs(node.right);
    let cur = node === p || node === q; // bool
    if (left + right + cur >= 2) res = node;
    return left || right || cur;
  };
  dfs(root);
  return res;
};

// shoot down left
// as we come bakc up, check if the node is p or q
// since we call dfs on left and right, we will know if p or q is in the left or right subtree
// and we're only setting cur to true if p or q is the node we're on
