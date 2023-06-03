var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;

  wordList.push(beginWord);

  const adj = {};
  for (const word of wordList) {
    for (let i = 0; i < word.length; i++) {
      const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
      if (!adj[pattern]) adj[pattern] = [];
      adj[pattern].push(word);
    }
  }
  const visit = new Set([beginWord]);
  const queue = [];
  let level = 1;
  queue.push(beginWord);

  while (queue.length > 0) {
    // get current length of quque
    const size = queue.length; // size of q constantly changes
    for (let i = 0; i < size; i++) {
      // get first word from q
      const word = queue.shift();
      if (word === endWord) return level;
      for (let j = 0; j < word.length; j++) {
        // get all patterns of word
        const pattern = word.slice(0, j) + "*" + word.slice(j + 1);
        // get adjacent word of pattern
        for (const nei of adj[pattern]) {
          // check if we visited the word
          if (!visit.has(nei)) {
            // add to visit and queue
            visit.add(nei);
            queue.push(nei);
          }
        }
      }
    }
    // after we iterate the current level
    level += 1;
  }
  return 0;
};

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
