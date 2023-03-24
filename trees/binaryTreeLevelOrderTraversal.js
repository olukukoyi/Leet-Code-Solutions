const btLevelOrderTraversal = (root) => {
  // better solution on the bottom
  // goal:
  // 1) get values on level, store in queue,
  // 2) refrence the level in q using lenght (this stores the length of the level)
  // 3) push the current nodes on the level into a sub array and push into res array
  // 4) shift first value in queue, check if it has children and push children to queue
  // do this in a loop until length is 0 (while len)

  // 5) repeat

  // break case
  // get values in level, store in queue
  // get length of queue to refrence current values in queue
  // use lenght to refrence queue, to push that lenght into the res array
  // push the current nodes on the level into a sub array and push into res array
  // --
  // then get node first node from queue, check if it has children and push children to que
  // repeat

  if (!root) return [];

  const q = [root];
  const res = [];

  while (q.length) {
    let len = q.length;
    res.push(q.map((node) => node.val)); // creates a sub array and pushes into res
    while (len--) {
      let node = q.shift();
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }
  return res;
};

// better example in english
// in first loop, we get the length of the queue and oush all current values in the queue into a sub array and push into res
// then we will have a nested loop
// in this nested loop, we will iterate as long as we have values in queue (q.length) we will shift( get the first value in queue, store and remove it), check if it has child nodes, if so we will push them into the queue
// we will repeat this untill we have no items in queue, so iteratively, run q-length--
