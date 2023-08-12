const ladderLength = (beginWord, endWord, wordList) => {
  // create adj     pattern : [] of words w/ pattern
  const adj = {};

  for (const word of wordList) {
    for (let i = 0; i < word.length; i++) {
      let pattern = word.slice(0, i) + "*" + word.slice(i + 1);
      if (!adj[pattern]) adj[pattern] = []; // creating entry in adj
      adj[pattern].push(word);
    }
  }
  const visit = new Set();
  visit.add(beginWord);
  const q = [];
  q.push(beginWord);
  let level = 1; // always start w 1 level in a tree (root lebel)

  while (q.length > 0) {
    let size = q.length;
    for (let j = 0; j < size; j++) {
      let word = q.shift();
      if (word === endWord) return level;

      // get patterns and traverse them

      for (let i = 0; i < word.length; i++) {
        let pattern = word.slice(0, i) + "*" + word.slice(i + 1);

        if (adj[pattern]) {
          for (const nei of adj[pattern]) {
            if (!visit.has(nei)) {
              visit.add(nei);
              q.push(nei);
            }
          }
        }
      }
    }
    // after we travser the entire level, increment level by 1
    level += 1;
  }
  return 0;
};

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
