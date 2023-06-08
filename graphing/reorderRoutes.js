const reorder = (n, connections) => {
  // hash connections to set
  const edges = new Set(connections.map(([a, b]) => `${a},${b}`));

  // adj list
  const adj = {}; // what we want , we will make it bi-directional based off of what we have
  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }
  // adj of what we want (bidirectional edge relationship)
  for (const [a, b] of connections) {
    adj[a].push(b);
    adj[b].push(a);
  }

  const visit = new Set();
  let changes = 0;

  const dfs = (city) => {
    for (const nei of adj[city]) {
      if (visit.has(nei)) continue;

      visit.add(nei);

      // chck if we have the bidirectional relationship
      if (!edges.has(`${nei},${city}`)) {
        changes += 1;
      }
      dfs(nei);
    }
  };

  visit.add(0);
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
