const reorder = (n, connections) => {
  // store edges in set

  const edges = new Set(connections.map(([a, b]) => [a, b]));

  // create adj
  const adj = {};
  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }
  for (const [a, b] of connections) {
    adj[a].push(b);
  }
  // dfs
  const visit = new Set();
  let changes = 0;

  const dfs = (city) => {
    // iterate over neighbors
    for (const nei of adj[city]) {
      if (visit.has(nei)) return false;

      visit.add(nei);

      if (!visit.has(`${nei},${city}`)) {
        changes += 1;
      }

      dfs(nei);
    }
    return changes;
  };
  dfs(0);
  return changes;
};

const c = [
  [0, 1],
  [1, 3],
  [2, 3],
  [4, 0],
  [4, 5],
];

console.log(reorder(6, c));
