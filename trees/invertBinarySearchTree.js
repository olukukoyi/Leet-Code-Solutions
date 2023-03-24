const binarySearchTree = (root) => {
  // solution using : dfs recursion

  // breakcase
  if (!root) return null;

  // logic (swaping variables)
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // recursion call
  binarySearchTree(root.left);
  binarySearchTree(root.right);

  // return
  return root;
};
