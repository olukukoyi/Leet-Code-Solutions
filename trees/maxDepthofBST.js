const maxDepth = (root) => {
  // we'll be using a recursive depth first search approach
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.root));
};

// ---

// or this, incase you find this easier to read
// const maxDepth = (root) => {
//  if(!root) return 0;

// let left = maxDepth(root.left)
// let right = maxDepth(root.right)

// return 1 + Math.max(left,right)
// };
