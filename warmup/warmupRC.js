const redundantC = (edges) => {
  const par = [];
  // par = [0,1,2,3]
  for (let i = 0; i <= edges.length; i++) {
    par.push(i);
  }
  const rank = new Array(edges.length).fill(1);

  const find = (n) => {
    let p = par[n];
    while (p !== par[p]) {
      par[p] = par[par[p]]; // fast
      p = par[p]; // slow
    }
    return p;
  };
  const union = (n1, n2) => {
    const p1 = find(n1);
    const p2 = find(n2);

    if (p1 === p2) return false;

    // if not equal, merge based off of rank

    if (rank[p1] > rank[p2]) {
      par[p2] = p1;
      rank[p1] += rank[p2];
    } else {
      par[p1] = p2;
      rank[p2] += rank[p1];
    }

    return true;
  };

  for (const [n1, n2] of edges) {
    if (!union(n1, n2)) return [n1, n2];
  }
};

const edges = [
  [1, 2],
  [1, 3],
  [2, 3],
];

console.log(redundantC(edges));
