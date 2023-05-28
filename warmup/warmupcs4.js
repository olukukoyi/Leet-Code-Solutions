const csfour = (numCourses, prerequisites, queries) => {
  const direct = {};
  const indirect = {};
  // getting direct prereqs using adjL
  for (const [p, c] of prerequisites) {
    if (!direct[c]) {
      direct[c] = [];
    }
    direct[c].push(p);
  }
  // getting indrect prereqs using a dfs function and adjL
  const dfs = (crs) => {
    if (!(crs in indirect)) {
      // new entry
      indirect[crs] = new Set();
      // check if has prereqs, execute if does
      if (direct[crs]) {
        for (const pre of direct[pre]) {
          indirect[crs] = new Set(...indirect[crs], ...dfs(pre));
        }
      }
      indirect[crs].add(crs);
    }
    return indirect[crs]; // if in set , return its prereq arr
  };
  for (let i = 0; i < numCourses; i++) {
    dfs(i);
  }
  const res = [];
  for (const [u, v] of queries) {
    res.push(indirect[v].has(u));
  }
};

const arr = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
];
