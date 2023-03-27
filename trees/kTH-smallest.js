const kth = (root, k) => {
  let count = 0;
  const stack = [];
  let cur = root;

  while (cur || stack.length > 0) {
    while (cur) {
      // shoot down the true and add the node to the stack
      stack.push(cur);
      cur = cur.left;
    }
    // pop the node from the stack after we hit the bottom;

    cur = stack.pop();
    count += 1;

    if (count === k) {
      return cur.val;
    }

    cur = cur.right;
  }

  return null; // kth smallest element does not exist
};
