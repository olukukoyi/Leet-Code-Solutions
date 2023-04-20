const findPath = (numCourse, prerequisites) => {
  //{c:[], c1:[] }
  const preMap = {};
  // creating AL
  for (let i = 0; i < numCourse; i++) {
    preMap[i] = [];
  }
  for (const [course, preReq] of prerequisites) {
    preMap[course].push(preReq);
  }

  // delcare global sets and output
  const output = [];
  const visitSet = new Set();
  const cycleSet = new Set();

  // dfs logic
  const dfs = (crs) => {
    // check if its in visitSet
    // check if in cycle Set
    // negate return false first
    // break cases
    if (cycleSet.has(crs)) return false;
    if (visitSet.has(crs)) return true;

    // recursive call , add to set and call dfs on prereq of current course
    visitSet.add(crs);
    cycleSet.add(crs);
    for (const pre of preMap[crs]) {
      if (!dfs(pre)) return false; // if false, return false, if true, keep calling dfs
    }

    // logic when we shoot back up tree
    cycleSet.remove(crs);
    output.push(crs);
    return true;
  };

  // initialization: calling dfs on all course
  for (let course = 0; course < numCourse; course++) {
    if (!dfs(course)) return [];
  }
  return output;
};
