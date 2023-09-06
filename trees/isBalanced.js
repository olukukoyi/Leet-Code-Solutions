const isBalanced = (root) => {
  const dfs = (root) => {
    // breakcases
    if (!root) {
      return [true, 0]; // [balanced, height]
    }

    // recusrive call
    let left = dfs(root.left); // [balanced, height]
    let right = dfs(root.right); // [balanced, height]

    // logic before we go up the tree
    let balanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1; // compute if its balanced

    //global return
    return [balanced, 1 + Math.max(left[1], right[1])]; // compute new height
  };

  return dfs(root)[0];
};

console.log(isBalanced([3, 9, 20, null, null, 15, 7]));
