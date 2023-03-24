const isSameTree = (p, q) => {
  // recursion solution
  //--
  // base case
  if (p === null && q === null) return true; // if both are null, return true
  // if we hit a leaf node witout interruptions, that means the trees are the same
  if ((p === null && q !== null) || (q === null && p !== null)) return false; // if theres a mismatch, return false
  if (p.val !== q.val) return false; // if the values don't match, return false
  // recursion call
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right); // recursive call
};
