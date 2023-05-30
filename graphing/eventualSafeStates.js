const eventualSafeNodes = (graph) => {
  // global vars
  const n = graph.length;
  const map = {}; // node : bool        ( bool => if safe node or not  )

  //dfs function
  const dfs = (i) => {
    // breakcases
    if (map[i] !== undefined) return map[i];
    map[i] = false; // create entry for ode in map

    // recrusive call
    // loop through neigh calls dfs on neigh, and check if we have loop
    // if there is a loop, we will know that in the break case because the breakcase checks if we already cached the value, and if we already cached the value , we will simply return the value stored to the node
    for (const neigh of graph[i]) {
      if (!dfs(neigh)) return false; // if we call dfs and we never hit false, its because we found a valid path
      // if we go through all neighrs and it never hits falls, we will jump out of recursive loop and begin shooting up the tree, view code below to see logic when we shoot up true
    }

    // logic when we shoot up the tree
    map[i] = true; // set to true if we break out of loop

    // return result to init
    return map[i];
  };

  //call dfs
  const res = [];
  for (let i = 0; i < n; i++) {
    if (dfs(i)) res.push(i);
  }
  // return result
  return res;
};
