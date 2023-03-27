// we will be using the Trie Data Structure

class TrieNode {
  constructor() {
    this.children = {}; // hash
    this.endOfWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    const dfs = (j, root) => {
      let cur = root;
      for (let i = j; i < word.length; i++) {
        const char = word[i]; // declare char variable

        // char is a dot
        if (char === ".") {
          for (const child of Object.values(cur.children)) {
            // iterate over entries , loop over children
            if (dfs(i + 1, child)) {
              // check result of recursive call
              return true;
            }
          }
          return false;
        } else {
          if (!cur.children[char]) {
            return false;
          }
          cur = cur.children[char];
        }
      }
      return cur.endOfWord;
    };
    return dfs(0, root);
  }
}
