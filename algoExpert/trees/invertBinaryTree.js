function invertBinaryTree(tree) {
  const q = [];
  q.push(tree);

  while (q.length > 0) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let node = q.shift();

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }

      let temp = node.left;
      node.left = node.right;
      node.right = temp;

      // add to q
    }
  }
}
