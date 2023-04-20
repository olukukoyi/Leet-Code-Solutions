// states of courses
// visited - added to output
// visiting - not added to output but added to set (allows us to check for cycle)
// unvisited - not added to ourput or cycle

const findOrder = (numCourses, prerequisites) => {
  // creating adjacency list
  const preMap = {};
  for (let i = 0; i < numCourses; i++) {
    preMap[i] = [];
  }
  for (const [course, pre] of prerequisites) {
    preMap[course].push(pre);
  }
  //
  const output = [];
  const visit = new Set(); // keeps track of nodes we already visited
  const cycle = new Set(); // detects cycle , (green path)

  const dfs = (crs) => {
    if (cycle.has(crs)) return false; // if its in here , there is a cycle
    if (visit.has(crs)) return true; // if already visited, we dont have to return twice

    visit.add(crs); // mark as visited because we touched the course and all the prereq
    cycle.add(crs);

    // recursive call, calling dfs on adjacent nodes
    for (const pre of preMap[crs]) {
      if (!dfs(pre)) {
        return false;
      }
    }
    // after we call dfs on adjacent nodes. this will be excecuted if it never returns false
    cycle.delete(crs); // remove from cycle
    output.push(crs);
    return true;
  };
  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) return [];
  }
  return output;
};
