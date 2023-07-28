// https://www.algoexpert.io/questions/group-anagrams
// time: O(n * m log m) where n is number of words, m is length of longest word
// space: O(w) where w is length of words

function groupAnagrams(words) {
  const groups = {};
  for (let word of words) {
    const sorted = word.split('').sort().join('');
    groups[sorted] = groups[sorted] || [];
    groups[sorted].push(word);
  }

  return Object.values(groups);
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;
