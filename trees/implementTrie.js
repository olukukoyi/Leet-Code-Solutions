// ***** Potential problem *****
// my favorite problem so far

class TrieNode {
  constructor() {
    this.children = {}; // hash of children
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(); // root of our trie (prefix tree)
  }

  insert(word) {
    // go through each char in word and either create new nodes or move to existing nodes
    let cur = root;
    for (char of word) {
      if (!cur.children[char]) {
        // if word is NOT in hash create new node for child
        cur.children[char] = new TrieNode(); // create a new child node
      }
      cur = cur.children[char]; // move to the next child node
    }
    cur.endOfWord = true; // mark the end of the word
  }

  search(word) {
    let cur = root;
    for (char of word) {
      // iterate and check if char is in trie / hash
      if (!cur.children[char]) {
        // if not char is not in trie, return false;
        return false;
      }
      cur = cur.children[char]; // increment char
    }
    return cur.endOfWord; // return true if we reach the end of the word
    // if cur.endOfWord is false, it means we have a prefix but not a word and will return false
    // if it is, we have a word and will return true
  }

  startsWith(prefix) {
    // same logic of search, but dont care if its the end of the word
    let cur = root;
    for (char of prefix) {
      if (!cur.children[char]) {
        return false;
      }
      cur = cur.children[char]; // increment char
    }
    return true;
  }
}
