const minCostConnectPoints = (points) => {
  //create adj      we're given a list of points, each point is a node
  // algo wont work until we incorporate a head class

  const n = points.length;
  const adj = {};
  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }
  for (let i = 0; i < n; i++) {
    [x1, y1] = points[i];
    for (let j = i + 1; j < n; j++) {
      [x2, y2] = points[j];
      let dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
      adj[i].push([dist, j]);
      adj[j].push([dist, i]);
    }
  }
  //prims algo

  let res = 0;
  const visit = new Set();
  minHeap = [[0, 0]]; // [cost,point]   start at 0
  while (visit.size < n) {
    let [cost, i] = minHeap.pop();
    if (visit.has(i)) continue;
    visit.add(i);
    res += cost; // add cost to res
    for (const [neiCost, nei] of adj[i]) {
      if (!visit.add(nei)) heap.push([neiCost, nei]);
    }
  }
  return res;
};
const points = [
  [0, 0],
  [2, 2],
  [3, 10],
  [5, 2],
  [7, 0],
];

minCostConnectPoints(points);
