const coursestwo = (courses, prereqs) => {
  const preMap = {};
  for (let i = 0; i < courses; i++) {
    preMap[i] = [];
  }

  for (const [c, p] of prereqs) {
    preMap[c].push(p);
  }
  //

  // global variables
  const output = [];
  const visited = new Set();
  const runningCycle = new Set();

  // call dfs
  const dfs = (course) => {
    // bc
    if (runningCycle.has(course)) return false; // always negate first
    if (visited.has(course)) return true;
    // recursive call

    runningCycle.add(course);
    visited.add(course);
    for (const pre of preMap[course]) {
      if (!dfs(pre)) return false; // allows us to immediately jump put recursive call
    }

    // logic as we shoot up
    runningCycle.delete(course);
    output.push(course);
    // optional return
    return true;
  };

  for (let c = 0; c < courses; c++) {
    if (!dfs(c)) return [];
  }
  return output;
};

const arr = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
];

console.log(coursestwo(5, arr));
