class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {}; // map key to node
    // Left = LRU . Right = most recent
    this.left = new Node(0); // dummy nodes to tell us least recent
    this.right = new Node(0); // dummy nodes to tell us most recent
    // remember it is a double linked list , so left points to right and right points to left
    // l> <r pointing back at each other
    this.left.next = this.right;
    this.right.prev = this.left;
    this.size = 0;
  }
  // helper functions for linked list :
  // remove from list
  remove(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
    this.size--;
  }
  // insert from right
  insert(node) {
    let prev = this.right.prev;
    let next = this.right;
    prev.next = next.prev = node;
    node.next = next;
    node.prev = prev;
    this.size++;
  }

  get(key) {
    if (this.cache[key]) {
      this.remove(this.cache[key]); // removes
      this.insert(this.cache[key]); // inserts to right
      return this.cache[key].val; // if it exist in hash, return it and update to most recent
    }
    return -1;
  }

  put(key, value) {
    if (this.cache[key]) {
      this.remove(this.cache[key]); // if it exist, remove it
    }
    // if it does not exist, execute everything below
    this.cache[key] = new Node(key, value); // create new node and insert to hash
    this.insert(this.cache[key]); // insert to array
    // if surpassed capacity
    if (this.size > this.capacity) {
      // remove from the linked list and delete the LRU from the hash map
      let lru = this.left.next;
      delete this.cache[lru.key];
      this.remove(lru); // remove from linked list
    }
  }
}
