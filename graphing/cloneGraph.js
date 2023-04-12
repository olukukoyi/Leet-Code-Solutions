class Node {
  constructor() {
    this.val; // we are cloning this
    this.neighbors; // [neighbors] , we are cloning this as well
  }
}

// ****** we do not need this class , it just helps visiualize what is going on //

// the dfs function takes the original node and makes a clone of that node and clone all of its neighbors

const cloneGraph = () => {
  const oldToNew = {};
  const dfs = (node) => {
    if (oldToNew[node]) return oldToNew[node]; // if node is in hash, return it
    let copy = Node(node.val);
    oldToNew[node] = copy; // mapping old to copy;
    for (const neighbor of node.neighbors) {
      copy.neighbors.append(dfs(neighbor)); // calling dfs on neighbors, and mapping those neighbors to the copy node
    }
    return copy;
  };
  return node ? dfs(node) : null;
};

// the original node will be val 1 , with neighbors 1 , 2
// we will copy the node 1, and map through the neighbors so that the copied node will also have the same neighbors of 1,2
// Create the original graph
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
node1.neighbors = [node2, node3];
node2.neighbors = [node1, node3];
node3.neighbors = [node1, node2];

// Clone the graph
const clonedNode1 = cloneGraph(node1);

// Output the cloned graph
console.log(clonedNode1);
