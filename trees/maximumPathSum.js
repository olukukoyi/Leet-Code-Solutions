const pathSum = (root) => {
  const res = [root.val];
  const dfs = (root) => {
    // return max pat sum without splitting
    if (!root) return 0;

    let leftMax = dfs(root.left);
    let rightMax = dfs(root.right);
    leftMax = Math.max(leftMax, 0); // if negative, ignore
    rightMax = Math.max(rightMax, 0); // if negative, ignore

    // compute max path sum with splitting
    res[0] = Math.max(res[0], root.val + leftMax + rightMax);

    // without splitting so pick 1
    return root.val + Math.max(leftMax, rightMax);
  };
  dfs(root);
  return res[0];
};
