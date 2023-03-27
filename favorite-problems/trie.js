class TrieNode {
  constructor() {
    this.children = {}; // hash
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    // iterate over word
    // if word is in hash, move to next word, if its not, create a new word and put to hash
    let cur = root; // always refence root;
    for (char of word) {
      if (!cur.children[char]) {
        // check if exist
        cur.children[char] = new TrieNode(); // puts in hash as a TrieNode
      }
      cur = cur.children[char]; // increment char
    }
    cur.endOfWord = true;
  }

  search(word) {
    // iterate of the word, check if word is in children hash, and once we get to the end, check if its the last char in word is true
    let cur = root; // always refence root;
    for (char of word) {
      if (!cur.children[char]) return false;
      cur = cur.children[char]; // increment char
    }
    // after we iterate over word and did not return false, return the bool of endOfWord. if true, return true. if false, return false.
    return cur.endOfWord;
  }

  insert(prefix) {
    // same concept as search, we're just not checking if endOfWord is true;

    let cur = root; // always refrence root;
    for (char of prefix) {
      if (!cur.children[char]) return false;
      cur = cur.children[char]; // increment char;
    }
    // if we hit the end of the word (pop out of loop w/o falsey) return true
    // keep in mind, we will only pop out the loop naturally when we loop through all values and did not recieve a falsey value
    return true;
  }
}
