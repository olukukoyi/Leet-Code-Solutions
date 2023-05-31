const ladderLength = (beginWord, endWord, wordList) => {
  if (!wordList.includes(endWord)) return false;
  wordList.push(beginWord);
  const adj = {};
  for (const word of wordList) {
    if (!adj[word]) {
      adj[word] = [];
    }
    // find every possible pattern , replacing chars with stars
    for (let i = 0; i < word.length; i++) {
      let pattern = word.replace(word[i], "*"); // creates patterns
      adj[pattern].push(word);
    }
  }
  return adj;
};

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
