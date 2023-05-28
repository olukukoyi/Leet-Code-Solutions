function check(numCourses, prerequisites) {
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
    if (!(crs in indirectAdj)) {
      // create a new entry
      indirectAdj[crs] = new Set();
      // this gives list of adjacaent nodes for each current nodr
      if (directAdj[crs]) {
        for (const pre of directAdj[crs]) {
          // call dfs on each prereq
          // updating set with new vals fromd dfs
          indirectAdj[crs] = new Set([...indirectAdj[crs], ...dfs(pre)]);
        }
      }
      indirectAdj[crs].add(crs);
    }
    return indirectAdj[crs]; // returns set indirect prereqs
  };

  for (let i = 0; i < numCourses; i++) {
    dfs(i);
  }
  const res = [];

  for (const [u, v] of queries) {
    res.push(indirectAdj[v].has(u));
  }

  return res;
}

const arr = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
];

console.log(check(2, arr));
