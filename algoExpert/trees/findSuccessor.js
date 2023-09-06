function findSuccessor(tree, node) {
  const getLeftMost = (node) => {
    let cur = node; // go to right sub tree

    // traverse left

    while (cur.left) {
      cur = cur.left;
    }

    return cur;
  };

  const getRightMost = (node) => {
    let cur = node;

    // while parent exist , and we came from the right subtree
    // if we either dont have a parent or did not come from right subtree, we terminate
    while (cur.parent && cur.parent.right === cur) {
      cur = cur.parent;
    }
    return cur.parent;
  };
  // if right child

  if (node.right) {
    return getLeftMost(node.right);
  }

  return getRightMost(node);
}
