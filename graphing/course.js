// solution with less comments (more concise notes)
// refer to the other file for a more in depth analysis to the problem

const canFinish = (numCourse, prerequisites) => {
  // preReq = [course, preReq]
  // creating adjancency list
  const preMap = {};
  for (let i = 0; i < numCourse; i++) {
    preMap[i] = []; // adds to hash
  }
  // adding the actual adjacent node list
  for (const [course, prereq] of prerequisites) {
    preMap[course].push(prereq);
  }
  // will look like this: { '0': [ 1 ], '1': [ 0 ] }      {"course": [prereq]}

  const visitSet = new Set(); // queue
  //dfs function, goal is to call dfs on all prereq
  const dfs = (course) => {
    if (visitSet.has(course)) return false; // if in set, return false
    if (preMap[course] === []) return true; // no rereqs, so retur true

    // dfs recursion call
    visitSet.add(course);
    for (const prereq of preMap[course]) {
      if (!dfs(prereq)) return false; // allows to call dfs, and handle if the return is false
    }
    visitSet.delete(course);
    preMap[course] = [];
    return true;
  };

  for (let i = 0; i < numCourse; i++) {
    // calling dfs on every node b/c its NOT a connected graph
    if (!dfs(i)) return false;
  }
  return true;
};

let res = canFinish(2, [[1, 0]]);

console.log(res);
