const checkIfPrerequisite = (numCourses, prerequisites, queries) => {
  // create direct adj
  const adj = {};
  for (const [pre, crs] of prerequisites) {
    if (!adj[crs]) adj[crs] = []; // create entry
    adj[crs].push(pre);
  }

  const indirectAdj = new Set();
  //   const indirectAdj = {};

  // populate indrectAdj using DFS
  const dfs = (crs) => {
    if (indirectAdj[crs]) return indirectAdj[crs];

    // if we have neighborrs
    indirectAdj[crs] = new Set();

    if (adj[crs]) {
      for (const nei of adj[crs]) {
        indirectAdj[crs] = new Set([...indirectAdj[crs], ...dfs(nei)]);
      }
    }

    indirectAdj[crs].add(crs);
    return indirectAdj[crs];
  };

  // init indires adj
  for (let i = 0; i < numCourses; i++) {
    dfs(i);
  }

  // handle queries
  const res = [];
  for (const [u, v] of queries) {
    res.push(indirectAdj[v].has(u));
  }

  console.log(indirectAdj);
  return res;
};

console.log(
  checkIfPrerequisite(
    2,
    [[1, 0]],
    [
      [0, 1],
      [1, 0],
    ]
  )
);
