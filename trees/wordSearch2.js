// DOES NOT WORK. smh

class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }

  addWord(word) {
    let cur = root;
    for (char of word) {
      if (!cur.current[char]) {
        cur.children[char] = new TrieNode();
      }
      cur = cur.children[char];
    }
    cur.endOfWord = true;
  }
}

const findWords = (board, words) => {
  let root = new TrieNode();
  for (w of words) {
    root.addWord(w);
  }
  let row = board.length;
  let cols = board[0].length;
  const res = new Set(); // global return
  const visit = new Set();

  const dfs = (r, c, node, word) => {
    // break cases
    if (
      r < 0 || // underflows
      c < 0 || // underflows
      r >= rows || // overflows
      c >= cols || // overflows
      !node ||
      visit.has(`${r},${c}`) || // in set
      !node.children(board[r][c]) // not in children
    ) {
      return;
    }
    // if none of the break cases hit
    visit.add(`${r},${c}`);
    node = node.children[board[r][r]]; // incrementing node, b/c we know it exist
    word += board[r][c]; // adding the char to the word.
    if (node.endOfWord) res.add(word); // after adding char to word, we will check if we're at the end of a word
    //
    dfs(r - 1, c, node, word);
    dfs(+1, c, node, word);
    dfs(r, c - 1, node, word);
    dfs(r, c + 1, node, word);

    //remove bc we're back tracking
    word += visit.remove(`${r},${c}`);
  };

  for (let r = 0; r < row; r++) {
    for (let c = 0; r < cols; c++) {
      dfs(r, c, root, "");
    }
  }
  return [...res];
};
