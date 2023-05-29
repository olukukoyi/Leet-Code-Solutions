const itenerary = (tickets) => {
  tickets = tickets.sort();
  const adj = {};

  for (const [src, dst] of tickets) {
    if (!adj[src]) {
      adj[src] = [];
    }
    adj[src].push(dst);
  }

  const res = ["JFK"];
  const dfs = (src) => {
    if (res.length === tickets.length + 1) return true;
    if (!adj[src]) return false;

    const temp = adj[src];

    for (let i = 0; i < temp.length; i++) {
      const v = temp[i]; // get first destination in the array

      adj[src].splice(i, 1); // removes 1 item at ith index
      res.push(v); // pushes to res

      if (dfs(v)) return true;

      adj[src].splice(i, 0, v); // inserts v at ith index
      res.pop(); // removes last element from res
    }
  };

  dfs("JFK");
  return res;
};

const tickets = [
  ["JFK", "SFO"],
  ["JFK", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "JFK"],
];

console.log(itenerary(tickets));
