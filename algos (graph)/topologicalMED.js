const checkIfPrerequisite = (numCourses, prerequisites, queries) => {
  // goal: answer quries
  // use topological sort to get indirect neighbors to answer quries . graph has NO cycles
  // course schedule 4

  // adj list
  const adj = {};
  for (const [p, c] of prerequisites) {
    if (!adj[c]) adj[c] = [];
    adj[c].push(p);
  }

  // dfs on neighs to popluate indirect adj
  const indirectAdj = new Set();
  const dfs = (crs) => {
    // breakcase
    if (indirectAdj[crs]) return indirectAdj[crs];

    indirectAdj[crs] = new Set();

    if (adj[crs]) {
      for (const nei of adj[crs]) {
        indirectAdj[crs] = new Set([...indirectAdj[crs], ...dfs(nei)]); // passes everything we return into the set
      }
    }
    // logic when we come back up
    indirectAdj[crs].add(crs);
    return indirectAdj[crs];
  };

  // call dfs

  for (let i = 0; i < numCourses; i++) {
    dfs(i);
  }

  // answer the queries
  const res = [];
  for (const [v, u] of queries) {
    res.push(indirectAdj[u].has(v));
  }
  return res;
};
