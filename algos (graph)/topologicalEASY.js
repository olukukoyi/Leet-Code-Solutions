const courseOne = (nums, prerequisites) => {
  // detect cycle in DAG (course schedule 1)

  const adj = {}; // crs : [list of prereq neighbors ]

  for (let i = 0; i < nums; i++) {
    adj[i] = [];
  }
  for (const [c, p] of prerequisites) {
    if (!adj[c]) adj[c] = [];
    adj[c].push(p);
  }
  // dfs to traverse through neighbors
  const visit = new Set(); // every node we visit
  const cycle = new Set(); // every node in current path
  const dfs = (crs) => {
    if (cycle.has(crs)) return false;
    if (visit.has(crs)) return true; // we already traversed this node go back up tree

    visit.add(crs);
    cycle.add(crs);

    for (const nei of adj[crs]) {
      if (!dfs(nei)) return false;
    }

    cycle.delete(crs);
    return true;
  };

  for (let i = 0; i < n; i++) {
    if (!dfs(i)) return false;
  }
  return true;
};
