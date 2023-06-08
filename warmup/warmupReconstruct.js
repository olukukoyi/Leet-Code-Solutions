const euler = (tickets) => {
  // redo then moe on
  // this is a euler circuit problem
  // touch each edge

  tickets = tickets.sort();

  const adj = {};

  for (const [src, dst] of tickets) {
    if (!adj[src]) adj[src] = [];
    adj[src].push(dst);
  }

  // dfs to touch each edge
  const res = ["JFK"];
  const dfs = (src) => {
    if (res.length === tickets.length + 1) {
      return true;
    }
    if (!adj[src]) return false; // no outgoing edges (leaf)
    const temp = adj[src];

    for (let i = 0; i < temp.length; i++) {
      const v = temp[i];
      arr[src].splice(i, 1);
      res.push(v);

      if (dfs(v)) return true;

      // logic when we shoot back up

      adj[src].splice(i, 0, v);
      res.pop();
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
  ["ATL", "SFO"],
];
console.log(euler(tickets));
