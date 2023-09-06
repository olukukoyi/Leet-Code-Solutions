function symmetricalTree(tree) {
  if (!tree) return true;
  const s1 = [];
  s1.push(tree.left);
  const s2 = [];
  s2.push(tree.right);

  while (s1.length > 0 && s2.length > 0) {
    let size = s1.length;

    for (let i = 0; i < size; i++) {
      let n1 = s1.shift();
      let n2 = s2.shift();

      if (!n1 && n2) return false;
      if (!n2 && n1) return false;
      if (!n1 && !n2) continue;

      if (n1.value !== n2.value) return false;

      // add to q
      if (n1.left) s1.push(n1.left);
      if (n1.right) s1.push(n1.right);
      if (n2.right) s2.push(n2.right);

      if (n2.left) s2.push(n2.left);
    }
  }

  if (s1.length === 0 && s2.length === 0) {
    return true;
  } else {
    return false;
  }
}
