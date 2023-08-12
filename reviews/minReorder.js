const minReorder = (n, connections) => {
  const edges = new Set(connections.map(([a, b]) => `${a},${b}`));

  // creating adj for undirected graph based off of directed graph
  const adj = {};
  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }
  for (const [a, b] of connections) {
    adj[a].push(b);
    adj[b].push(a);
  }

  const visit = new Set();
  let changes = 0;
  const dfs = (city) => {
    // immeditately travsere neighbors
    for (const nei of adj[city]) {
      if (visit.has(nei)) continue;

      visit.add(nei);

      // city, nei
      // check for nei city, the oppisite edge (going opposite direction)
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

console.log(
  minReorder(6, [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ])
);
