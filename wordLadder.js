var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;

  const adj = {};
  // adj , get word from list, generate patterns, store patterns as key, and words with that pattern is values
  for (const word of wordList) {
    for (let i = 0; i < word.length; i++) {
      const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
      if (!adj[pattern]) adj[pattern] = [];
      adj[pattern].push(word);
    }
  }

  // bfs , iterates through wordList, get patterns, get hashed values of paterns, and call bfs on patterns
  // sicne its bfs, we will throw the hash values in a que so we can iterate over them
  // and to save work and prevent loops , we dont want to iterate over nodes we visited already, so when we through them in a q we will throw them in a set

  const q = [beginWord];
  const visit = new Set([beginWord]);
  let level = 1;

  while (q.length > 0) {
    const size = q.length;

    for (let i = 0; i < size; i++) {
      // iterate through runningSize of queue
      const curWord = q.shift();

      if (curWord === endWord) return level;
      for (let j = 0; j < curWord.length; j++) {
        // getting patterns
        const pattern = curWord.slice(0, j) + "*" + curWord.slice(j + 1);
        // get the neighbors of patterns array
        for (const nei of adj[pattern]) {
          if (!visit.has(nei)) {
            visit.add(nei);
            q.push(nei);
          }
        }
      }
    }
    // after we iterate through the running queue, we want to move on and iterate through the next queue at the next level , so we incremment the level
    level++;
  }
  return 0;
};

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
