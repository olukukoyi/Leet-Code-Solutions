const redundant = (edges) => {
  // union find algorithm
  const par = []; // parent array (representatives)
  const rank = Array(edges.length).fill(1);
  // populate parents
  for (let i = 0; i <= edges.length; i++) {
    par.push(i);
  }

  const find = (n) => {
    // finding parent of node
    let p = par[n]; // parent of n

    while (p !== par[p]) {
      par[p] = par[par[p]]; // increment p's parent pointer
      p = par[p]; // increment p pointer
    }
    return p;
  };

  // return false if cant complete (already merged)
  const union = (n1, n2) => {
    // getting root parents
    const p1 = find(n1);
    const p2 = find(n2);

    if (p1 === p2) return false;

    // if not merged, union by rank (size) then return true

    if (rank[p1] > rank[p2]) {
      par[p2] = p1; // updating parent of p2
      rank[p1] = rank[p1] + rank[p2]; // updating rank of p1
    } else {
      par[p1] = p2;
      rank[p2] = rank[p2] + rank[p1];
    }
    return true;
  };

  for (const [n1, n2] of edges) {
    if (!union(n1, n2)) return [n1, n2];
  }
};

console.log(
  redundant([
    [1, 2],
    [1, 3],
    [2, 3],
  ])
);
