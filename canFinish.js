const canFinish = (numCourses, prerequisites) => {
  // create adj

  const adj = {};

  for (const [crs, pre] of prerequisites) {
    if (!adj[crs]) adj[crs] = [];
    adj[crs].push(pre);
  }

  const visit = new Set();
  const path = new Set();

  const dfs = (crs) => {
    if (path.has(crs)) return false;
    if (visit.has(crs)) return true;

    visit.add(crs);
    path.add(crs);

    // check if it has neighbors, if it do, traverse the,
    if (adj[crs]) {
      for (const nei of adj[crs]) {
        if (!dfs(nei)) return false;
      }
    }
    path.delete(crs);
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
};

console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);
