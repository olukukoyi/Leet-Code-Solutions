var serialize = function (root) {
  // tree to string
  // dfs, hit each node and push values into an array as you touch them during the traversal

  // global result
  const res = [];
  const dfs = (node) => {
    // breakcase
    if (!node) {
      res.push("N");
      return;
    }
    res.push(node.val.toString());
    // recursive call
    dfs(node.left); // dfs on left
    dfs(node.right); // nfs on right
  };
  dfs(root);
  // joining them as a string and returning
  return res.join(",");
};

var deserialize = function (data) {
  // string to tree

  // string back to an array of strings ex ) ["1","2",N,N....]
  let vals = data.split(",");

  // recursive function
  const dfs = () => {
    // gets first item from array
    let rootVal = vals.shift();
    // break case
    if (rootVal === "N") {
      return null;
    }
    // if its not empty, create a new node
    let node = new TreeNode(parseInt(rootVal));

    // call dfs on that new node
    node.left = dfs();
    node.right = dfs();
    return node;
  };
  return dfs();
};
