const canFinish = (numCourses, prerequisites) => {
  // numCourses = number of nodes
  // preReqs = number of edges
  // --
  // *****  mapping each course to prereq list
  const preMap = {};
  for (let i = 0; i < numCourses; i++) {
    preMap[i] = []; // initialize each node to an empty array
  }
  for (const [course, pre] of prerequisites) {
    // loops through preReq , extracts the course and preReq from the sub array
    // then assigns pre to the course in hash
    preMap[course].push(pre);
  }
  // ****
  // creating visitSet
  // visitSet = all courses along the current DFS path
  const visitSet = new Set();
  const dfs = (course) => {
    //break cases
    if (visitSet.has(course)) return false; // if course already in set, means its a loop. return false
    if (preMap[course] === []) return true; // if course has no pre Reqs

    visitSet.add(course); // add course to set if no cases are hit
    for (const pre of preMap[course]) {
      // looping through the pre-reqs of the course and call dfs
      if (!dfs(pre)) return false; // return false if its false , it will be false if its a course that cant be taken due to it being a loop
    }
    visitSet.delete(course); // remove since we already visited it
    preMap[course] = []; // since the course can be visited , we will run true on the next time we call dfs on it
    return true; // if it can be taken return true
  };
  // now we have to call dfs on every course we have
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false; // if false, return false
    // we are calling dfs on it iteratively because there is a possibility that the graph is NOT connected
  }
  return true;
};

canFinish(4, [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
]);
