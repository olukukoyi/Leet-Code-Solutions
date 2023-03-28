// regular trie and add and search solution

class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    root = new TrieNode();
  }

  insert(word) {
    let curr = root;
    // iterate over chars in the word, check if its in children hash, if not, add new node, else point to it end continue iteration;
    for (const char of word) {
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode();
      }
      curr = curr.children[char];
    }
    curr.endOfWord = true;
  }
  // regular search
  search(word) {
    let curr = root;
    for (const char of word) {
      if (!curr.children[char]) return false;
      curr = curr.children[char];
    }
    return curr.endOfWord;
  }
  // wildcardSeach where " . " can be any char
  searchVTwo(word) {
    const dfs = (j, root) => {
      let cur = root;
      for (let i = j; i < word.length; i++) {
        // logic when we have a dot
        if (word[i] === ".") {
          for (const child of Object.values(cur.children)) {
            if (dfs(i + 1, child)) return true;
          }
          return false; // no match
        } else {
          // logic when we dont have a dot
          if (!cur.children[word[i]]) {
            return false;
          }
          cur = cur.children[word[i]];
        }
      }
      return cur.endOfWord;
    };
    return dfs(0, root);
  }
}
