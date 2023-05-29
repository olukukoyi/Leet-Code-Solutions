const findItinerary = (tickets) => {
  // ticket => [from,to] => [src,dst]
  tickets.sort(); // sorts
  // creating adjList
  const adj = {};
  for (const [src, dst] of tickets) {
    if (!adj[src]) {
      adj[src] = [];
    }
    adj[src].push(dst);
  }
  //dfs
  const res = ["JFK"];
  const dfs = (src) => {
    // breakcases
    if (res.length === tickets.length + 1) return true; // figureout why this is true and we're good
    if (!adj[src]) return false;
    // recursive call
    temp = adj[src];

    for (let i = 0; i < src.length; i++) {
      const v = temp[i];
      adj.splice(i, 1);
      res.push(v);

      if (dfs(v)) return true;

      adj.splice(i, 0, v);
      res.pop();
    }
    // logic as we shoot back up
    // optional backtrack
    // return
  };

  // initial dfs call
  dfs("JFK");

  // return
  return res;
};

const tickets = [
  ["JFK", "SFO"],
  ["JFK", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "JFK"],
  ["ATL", "SFO"],
];

console.log(findItinerary(tickets));
