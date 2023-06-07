const handleQueries = (numCourses, prerequisites, queries) => {
  // 1) create adj for direct
  // 2) create adj for indirect
  // dfs, get the direct neighbors and call dfs
  // when we hit a leaf, we will pop the node into a and return set up the call stack

  const direct = {};
  for (const [p, c] of prerequisites) {
    if (!direct[c]) {
      direct[c] = [];
    }
    direct[c].push(p);
  }
  const indirect = {};
  // no cycles
  // shoot down graph (dfs) until we hit a leaf
  // check if we created an entry, if we did, return val up tree
  // if we didnt , create entry , call dfs on direct nodes (check if they exist), store vals in a set
  // when we hit a leaf ,
  const dfs = (crs) => {
    if (indirect[crs]) {
      return indirect[crs];
    }
    indirect[crs] = new Set();
    if (direct[crs]) {
      for (const nei of direct[crs]) {
        indirect[crs] = new Set([...indirect[crs], ...dfs(nei)]);
      }
    }
    indirect[crs].add(crs);
    return indirect[crs];
  };
  for (let i = 0; i < numCourses; i++) {
    dfs(i);
  }
  // handle queries
  const res = [];
  for (const [u, v] of queries) {
    res.push(indirect[v].has(u));
  }
  return res;
};
