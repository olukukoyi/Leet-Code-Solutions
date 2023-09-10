function findNodesDistanceK(tree, target, k) {
  // helpers

  const populateParents = (node) => {
    const parents = {};

    const dfs = (node, parent) => {
      if (!node) return;

      let left = dfs(node.left, node);
      let right = dfs(node.right, node);

      parents[node.value] = parent;
    };
    dfs(tree, null);
    return parents;
  };

  const getTarget = () => {
    if (tree.value === target) return tree;
    const parent = parentsMap[target];

    if (parent.left && parent.left.value === target) {
      return parent.left;
    }

    return parent.right;
  };

  const returnValsFromQ = () => {
    const res = [];

    for (const n of q) {
      res.push(n.value);
    }
    return res;
  };

  // ---- helper function ------- ^^

  if (!tree) return [];
  if (!tree.left && !tree.right) return [];
  const parentsMap = populateParents(tree);
  const nodeTarget = getTarget();

  // bfs

  const q = [];
  q.push(nodeTarget);
  const visit = new Set();
  visit.add(nodeTarget.value);
  let level = 1;

  while (q.length > 0) {
    let size = q.length;

    for (let i = 0; i < size; i++) {
      // bc
      if (level === k + 1) {
        console.log("level: ", level);
        console.log("size of q: ", q.length);

        console.log("q: ", returnValsFromQ());
        return returnValsFromQ();
      }

      const node = q.shift();
      const nei = [node.left, node.right, parentsMap[node.value]];

      for (const n of nei) {
        if (n && !visit.has(n.value)) {
          q.push(n);
          visit.add(n.value);
        }
      }
    }
    level += 1;
  }

  return [];
}
