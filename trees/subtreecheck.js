const sameTree = (s, t) => {
  // both null
  if (!s && !t) return true;
  // both not null and equal
  if (s && t && s.val === t.val) {
    // if true, cal dfs on left and right
    return sameTree(s.left, t.left) && sameTree(s.right, t.right);
  }
  return false;
};
var isSubtree = function (root, subRoot) {
  // edge case
  if (!subRoot) return true; // if sub root is empty
  if (!root) return false; //if root is empty....  if subroot is empty and root is not empty, return false

  if (sameTree(root, subRoot)) return true; // calling sameTree to check if theyre the same
  // recursive call
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
