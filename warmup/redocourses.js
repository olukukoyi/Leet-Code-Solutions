const res = (courses, prereqs) => {
  // [c,p] , prereqs
  // { c1 : [], c2: [ ]} , premaps
  const preMap = {};
  for (let i = 0; i < courses; i++) {
    preMap[i] = [];
  }
  for (const [c, p] of prereqs) {
    preMap[c].push(p);
  }

  const visited = new Set(); // every node visited will be placed in here
  const dfs = (course) => {
    // bc
    if (visited.has(course)) return false;
    if (preMap[course] === []) return true; // no prereqs return true
    // recursive call

    for (const pre of preMap(course)) {
      if (!dfs(pre)) return false;
    }

    // what to do when we come back up true
    visited.delete(course); // remvoe from set
    preMap[course] = []; // mark it

    // optional return
    return true;
  };
};

const arr = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
];

console.log(res(5, arr));
