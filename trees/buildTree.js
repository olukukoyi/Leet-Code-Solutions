const buildTree = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) return null; // if empty
  // the zero index in pre order is the root

  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(preorder[0]);
  // pass in new pre order and sub order arrays
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
};

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);

/// Pattern: DFS Recursion, knowing how inorder and preorder traversals work. When slicing the arrays and passing it into the recursion the call, the sliced arrays must be the same. Keep that in mind when whiteboard. If theyre not the same, something is wrong in the logic/algorithm.
