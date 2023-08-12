const findItinerary = (tickets) => {
  tickets.sort();

  // create adj

  // whenevr you have edges and you want to traverse them and know the path of the edges, you will need an adj

  const adj = {};

  for (const [src, dst] of tickets) {
    if (!adj[src]) adj[src] = []; // creates entry
    adj[src].push(dst);
  }

  // dfs call

  const res = ["JFK"]; // starting from JFk
  const dfs = (src) => {
    if (res.length === tickets.length + 1) return true;
    if (!adj[src]) return false; // no out going edges

    // iteratively travsere through adj array
    // we'll be deleting nodes while iterating, so we will use a temp

    const temp = adj[src]; // gets us the adj array

    for (let i = 0; i < temp.length; i++) {
      let v = temp[i];
      adj[src].splice(i, 1);
      res.push(v);

      if (dfs(v)) return true;

      // backtracking logic if it is false

      adj[src].splice(i, 0, v);
      res.pop();
    }
  };

  dfs("JFK");
  return res;
};

console.log(
  findItinerary([
    ["JFK", "SFO"],
    ["JFK", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "JFK"],
    ["ATL", "SFO"],
  ])
);
