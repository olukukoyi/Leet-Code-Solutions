const findOrder = (numCourses, prerequisites) => {
  // detetct cycle
  // return order to traverse graph
  // course schecule 2

  const adj = {};
  for (let i = 0; i < numCourses; i++) {
    adj[i] = [];
  }
  for (const [c, p] of prerequisites) {
    adj[c].push(p);
  }

  // dfs on neighbors
  const visit = new Set(); // stores EVERY node we touch
  const cycle = new Set(); // checks for cycle in CURRENT path
  const res = [];

  const dfs = (crs) => {
    if (cycle.has(crs)) return false;
    if (visit.has(crs)) return true;

    visit.add(crs);
    cycle.add(crs);

    for (const nei of adj[crs]) {
      if (!dfs(nei)) return false;
    }

    // down here (if no neighbors, or we iterate over all neighbors )
    cycle.delete(crs);
    res.push(crs);
    return true;
  };
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  }
  return res;
};
