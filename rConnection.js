const redundantConnection = (edges) => {
  // init rank and parent array
  // given array of edges , ith indiex is ith node
  const rank = new Array(edges.length).fill(1); // init the rank to 1
  const par = []; // initialize parent of ith node to itself
  for (let i = 0; i <= edges.length; i++) {
    par.push(i);
  }

  const find = (n) => {
    let p = par[n];
    while (p !== par[p]) {
      // while p is not equal to its parents, increment both
      par[p] = par[par[p]];
      p = par[p];
    }
    return p;
  };

  // union:
  // find parents of nodes,
  // if theyre in same tree, return false
  // else we merge based off of rank , size of the parents

  const union = (n1, n2) => {
    // get parents of n1 and n2
    let p1 = find(n1);
    let p2 = find(n2);

    //breakcases
    if (p1 === p2) return false;

    if (rank[p1] > rank[p2]) {
      par[p2] = p1;
      rank[p1] = rank[p1] + rank[p2];
    } else {
      par[p1] = p2;
      rank[p2] = rank[p2] + rank[p1];
    }
    // if successfully merged, return true
    return true;
  };

  // initial call
  for (const [n1, n2] of edges) {
    if (!union(n1, n2)) return [n1, n2];
  }
};

const edges = [
  [1, 2],
  [1, 3],
  [2, 3],
];

console.log(redundantConnection(edges));
