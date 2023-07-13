class MinHeap {
  constructor() {
    this.heap = []; // get size
  }

  size() {
    return this.heap.length; // get size
  }

  // add and remove methods

  enqueue(path, node) {
    const element = { path, node }; // create elemnt
    this.heap.push(element); // push to end of heap
    this.bubbleUp(this.heap.length - 1); // bubble it up, we pass in last index bc when we push , this element will be at the end of the heap
  }

  // bubble methods

  bubbleUp(index) {
    // starting from last position in heap (hence we pass in last index)

    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2); // get par index
      const parent = this.heap[parentIndex]; // get parent

      if (element.path >= parent.path) {
        // if element is at correct spot
        break;
      }
      // we will swap nodes using index
      // at the current element index, we will place parent
      // at the parent index, we will place element
      // after swapping , we will incrmeent index for elemnt
      // swap this using temp
      this.heap[index] = parent; // place parent at current element
      this.heap[parentIndex] = element; // place current element at parent
      index = parentIndex; // increment index
    }
  }

  bubbleDown(index) {
    
  }
}
