var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  const directAdj = {}; // handles direct prereqs
  const indirectAdj = {}; // handles indirect prereqs

  for (const [p, c] of prerequisites) {
    if (!directAdj[c]) {
      directAdj[c] = [];
    }
    directAdj[c].push(p);
  }
  // dfs function to populate indirectAdj
  // goal : populate an adj list with indirect child nodes using an adjacency list of all nodes with their adjacent nodes
  // recursives call
  const dfs = (crs) => {
    // break cases
    if (crs in indirectAdj) {
      return indirectAdj[crs];
    }

    indirectAdj[crs] = new Set();

    if (directAdj[crs]) {
      for (const neigh of directAdj[crs]) {
        indirectAdj[crs] = new Set([...indirectAdj[crs], ...dfs(neigh)]);
      }
    }
    indirectAdj[crs].add(crs);
    return indirectAdj[crs];
  };

  for (let i = 0; i < numCourses; i++) {
    dfs(i);
  }
  const res = [];

  for (const [u, v] of queries) {
    res.push(indirectAdj[v].has(u));
  }

  return res;
};
