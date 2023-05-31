const cs = (numCourses, prerequisites) => {
  // adj list
  const adj = {};
  for (let i = 0; i < numCourses; i++) {
    if (!adj[i]) {
      adj[i] = [];
    }
  }

  for (const [crs, pre] of prerequisites) {
    adj[crs].push(pre);
  }
  //
  const visited = new Set(); // stores nodes we visited

  const dfs = (crs) => {
    if (visited.has(crs)) return false;
    if (adj[crs] === []) return true;

    visited.add(crs);
    for (const pre of adj[pre]) {
      if (!dfs(pre)) return false;
    }

    visited.delete(crs);
    adj[crs] = [];
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
};
