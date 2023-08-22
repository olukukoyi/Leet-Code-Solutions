const mergeTrees = (root1, root2) => {
  // keep creating nodes as long as one of them exist
  const dfs = (n1, n2) => {
    if (!n1 && !n2) {
      return null;
    }

    // getting values of nodes if they exist
    let v1 = n1 ? n1.val : 0;
    let v2 = n2 ? n2.val : 0;

    let root = new TreeNode(v1 + v2); // create node with the sum

    root.left = dfs(n1 && n1.left, n2 && n2.left);
    root.right = dfs(n1 && n1.right, n2 && n2.right);

    return root;
  };

  return dfs(root1, root2);
};

console.log(mergeTrees([1, 3, 2, 5], [2, 1, 3, null, 4, null, 7]));
