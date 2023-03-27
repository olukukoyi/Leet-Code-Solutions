const validateTree = (root) => {
  // goal is to use DFS recusrion to compare curr node to previus node values
  const dfs = (currNode, left, right) => {
    if (!currNode) return true;
    if (currNode.val > left && currNode.val < right) {
      return (
        // dfs on both left and right
        // left and right are the new bounds
        dfs(currNode.left, left, currNode.val) &&
        // right is the new bound
        dfs(currNode.right, currNode.val, right)
      );
    }
    // if never true, return false
    return false;
  };
  // initial dfs call
  return dfs(root, -Infinity, Infinity);
};

// initially we are checkig left and right (curent node and root of the current node tree)
// left <currNode.val < right,only changing value of right
//      : left(-Infinty) < currNode.val < rootOfCurrNode

// --

// if we have to go to the right, we are checking the current node, root of the current node, and root of the entire tree               : left < currNode.val < right => currNodeRoot < currNode.val < rootOfTree
