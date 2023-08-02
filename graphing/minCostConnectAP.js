// Using prims algorithm

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  poll() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const item = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(weight, value) {
    const edge = { weight, value };
    this.heap.push(edge);
    this.heapifyUp();
  }

  remove(value) {
    const index = this.heap.findIndex((edge) => edge.value === value);
    if (index === -1) {
      return false;
    }
    this.heap[index] = this.heap.pop();
    this.heapifyDown();
    return true;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      this.hasParent(index) &&
      this.parent(index).weight > this.heap[index].weight
    ) {
      const parentIndex = this.getParentIndex(index);
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index).weight < this.leftChild(index).weight
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index].weight < this.heap[smallerChildIndex].weight) {
        break;
      }

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}

const minCostConnectPoints = (points) => {
  let N = points.length;
  const adj = [];

  for (let i = 0; i < N; i++) {
    adj[i] = [];
  }

  for (let i = 0; i < N; i++) {
    let [x1, y1] = points[i];
    for (let j = i + 1; j < N; j++) {
      let [x2, y2] = points[j];
      let cost = Math.abs(x1 - x2) + Math.abs(y1 - y2);
      adj[i].push({ weight: cost, value: j }); // Store {cost, neighbor} in the adjacency list.
      adj[j].push({ weight: cost, value: i }); // Store {cost, neighbor} in the adjacency list.
    }
  }

  const minH = new MinHeap();
  minH.add(0, 0); // Start with point 0 (could be any starting point).
  const visit = new Set();
  let res = 0;

  while (visit.size < N) {
    let { weight: cost, value } = minH.poll();
    if (visit.has(value)) {
      continue; // If we already visited the point, skip.
    }
    res += cost;
    visit.add(value);

    for (const { weight: costNei, value: nei } of adj[value]) {
      if (!visit.has(nei)) {
        minH.add(costNei, nei);
      }
    }
  }
  console.log(adj);
  return res;
};

console.log(
  minCostConnectPoints(
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
    [5, 0],
    [2, 3],
    [1, 6],
    [4, 1],
    [10, 10],
    [3, 8]
  )
);
