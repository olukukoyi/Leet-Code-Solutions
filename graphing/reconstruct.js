var findItinerary = function (tickets) {
  const adj = {};

  // sort tickets
  tickets.sort();
  // adj list
  for (const ticket of tickets) {
    const src = ticket[0];
    const dst = ticket[1];
    if (!adj[src]) {
      adj[src] = [];
    }
    adj[src].push(dst);
  }
  console.log("adj:", adj);
  // dfs

  const res = ["JFK"];
  const dfs = (src) => {
    // break cases
    if (res.length === tickets.length + 1) {
      return true; // found a solution
    }
    if (!(src in adj)) {
      return false; // no out going flights
    }

    // recurisve call
    const temp = adj[src]; // temp bc we are editing array during iteration
    for (let i = 0; i < temp.length; i++) {
      const v = temp[i]; // get destination
      adj[src].splice(i, 1); // remove from destination arry
      res.push(v); // push to result

      if (dfs(v)) return true; // if true, return true

      // backtracking logic
      adj[src].splice(i, 0, v); // inserting at index
      res.pop(); // remove from res
    }
    return false;
  };
  dfs("JFK");
  return res;
};

const tickets = [
  ["MUC", "LHR"],
  ["JFK", "MUC"],
  ["SFO", "SJC"],
  ["LHR", "SFO"],
];

console.log(findItinerary(tickets));
