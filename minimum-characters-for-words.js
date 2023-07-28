// https://www.algoexpert.io/questions/minimum-characters-for-words
// time: O(n) where n is total number of characters in words
// space: O(n)

function minimumCharactersForWords(words) {
  const minCounts = {};

  for (let word of words) {
    const counts = {};
    for (let character of word) {
      counts[character] = counts[character] || 0;
      counts[character]++;
      if (!minCounts[character] || counts[character] > minCounts[character]) minCounts[character] = counts[character];
    }
  }

  const result = [];
  for (let [key, value] of Object.entries(minCounts))
    while (value-- > 0) result.push(key);

  return result;
}

// Do not edit the line below.
exports.minimumCharactersForWords = minimumCharactersForWords;
