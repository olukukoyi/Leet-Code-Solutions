const findItinerary = (tickets) => {
  // eularian path
  // touch every edge using adj list, backtrack if we touch a node that has no outgoing edges
  // reconstructut itenerary

  tickets = tickets.sort();

  const adj = {};
  for (const [src, dst] of tickets) {
    if (!adj[src]) adj[src] = [];
    adj[src].push(dst);
  }

  // we need to return path of eularian circuit , starting from JFK
  const res = ["JFK"];

  const dfs = (src) => {
    if (res.length === tickets.length + 1) return true;
    if (!adj[src]) return false;

    const temp = adj[src]; // store adj neis we cant delete vals from an array while iterating
    for (let i = 0; i < temp.length; i++) {
      const v = temp[i]; // ith city in adj list

      adj[src].splice(i, 1);
      res.push(v);

      if (dfs(v)) return true;

      adj[src].splice(i, 1, v);
      res.pop();
    }
  };
  dfs("JFK");
  return res;
};
