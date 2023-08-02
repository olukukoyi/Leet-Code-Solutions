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
    return this.heap[0].value;
  }

  poll() {
    // returns value
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop().value;
    }
    const item = this.heap[0].value;
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return item;
  }
  heappop() {
    // returns object
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
    if (typeof weight !== "number" || weight < 0 || !Number.isInteger(weight)) {
      throw new Error("Weight must be a non-negative integer.");
    }
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

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }
}

const networkDelayTime = (times, n, k) => {
  // creating adj
  const edges = {};
  for (let i = 1; i <= n; i++) {
    edges[i] = [];
  }
  // edges => [u,v,w] => [src, cost, dst]
  for (const [u, v, w] of times) {
    if (!edges[u]) {
      edges[u] = [];
    }
    edges[u].push([v, w]);
  }

  const minHeap = new MinHeap();
  minHeap.add(0, k);
  const visit = new Set();
  let res = 0;

  // node : [node,cost]

  while (!minHeap.isEmpty()) {
    let poppedVal = minHeap.heappop();
    let n1 = poppedVal.value;
    let w1 = poppedVal.weight;

    if (visit.has(n1)) {
      continue;
    }
    visit.add(n1);
    res = Math.max(res, w1); // update res    review this

    // bfs

    for (const [n2, w2] of edges[n1]) {
      if (!visit.has(n2)) {
        minHeap.add(w1 + w2, n2); // w1 + w2 is the total path length
      }
    }
  }

  if (visit.size == n) {
    return res;
  } else {
    return -1;
  }
};

console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2
  )
);
