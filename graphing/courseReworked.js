var canFinish = function (numCourses, prerequisites) {
  // initially we marked nodes as visited by removing adjacent nodes from array
  // now we mark them as visited in our set
  //  we will have 2 sets

  // one for keeping track of the cycle and detect cycles , the other to keep track of every node we touched
  const adj = {};
  for (let i = 0; i < numCourses; i++) {
    if (!adj[i]) {
      adj[i] = [];
    }
  }
  for (const [c, p] of prerequisites) {
    if (adj[c]) {
      adj[c].push(p);
    }
  }
  const visit = new Set(); // everything we touch goes here
  const cycle = new Set(); // keeps track of path

  const dfs = (crs) => {
    if (cycle.has(crs)) return false;
    if (visit.has(crs)) return true;

    visit.add(crs);
    cycle.add(crs);
    for (const neigh of adj[crs]) {
      if (!dfs(neigh)) return false;
    }

    cycle.delete(crs);
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
};
