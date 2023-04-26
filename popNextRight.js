const connect = (node) => {
  let cur = node;
  let next = node.left ? node.left : null; // if node.left exist , get it, else put null

  while (cur && next) {
    cur.left.next = cur.right;
    if (cur.next) {
      cur.right.next = cur.next.left;
      // if we have 1>2 and 3>4 (seperate sub trees)
    }
    cur = cur.next;
    if (!cur) {
      cur = next;
      next = cur.left;
    }
  }
  return node;
};
