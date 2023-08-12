const findOrder = (numCourses, prerequisites) => {
  const adj = {};
  for (const [crs, pre] of prerequisites) {
    if (!adj[crs]) adj[crs] = []; // create entry if it does not exist
    adj[crs].push(pre);
  }

  const visit = new Set(); // stores eveyr node we visited
  const path = new Set(); // used to store path and detect cycles
  const res = [];

  const dfs = (crs) => {
    if (path.has(crs)) return false;
    if (visit.has(crs)) return true;

    visit.add(crs);
    path.add(crs);

    // look through neighbors, IF they exist
    if (adj[crs]) {
      for (const nei of adj[crs]) {
        if (!dfs(nei)) return false;
      }
    }
    path.delete(crs);
    res.push(crs);
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  }

  return res;
};

console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
);
