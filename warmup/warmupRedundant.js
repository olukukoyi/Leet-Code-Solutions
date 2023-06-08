const redunant = (edges) => {
  // union find algorithm
  const rank = new Array(edges.length).fill(1);
  const par = []; // [0,1,2,3]
  for (let i = 0; i <= edges.length; i++) {
    par.push(i);
  }

  const find = (node) => {
    let p = par[node];
    while (p !== par[p]) {
      par[p] = par[par[p]];
      p = par[p];
    }
    return p;
  };
  const union = (n1, n2) => {
    const p1 = find(n1);
    const p2 = find(n2);

    if (p1 === p2) return false;

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

  return [];
};

const edges = [
  [1, 2],
  [1, 3],
  [2, 3],
];

console.log(redunant(edges));
