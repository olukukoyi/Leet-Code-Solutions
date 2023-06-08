const validTree = (n, edges) => {
  // detecting cycle in an undirected graph
  const adj = {}; // undirected adj
  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }
  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
  }

  const visit = new Set();

  const dfs = (node, prevVal) => {
    if (visit.has(node)) return false; // cycle

    visit.add(node);
    for (const nei of adj[node]) {
      if (nei === prevVal) continue;
      if (!dfs(nei, node)) return false;
    }
    return true;
  };

  return dfs(0, -1) && visit.size === n;
};
