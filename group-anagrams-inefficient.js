// https://www.algoexpert.io/questions/group-anagrams
// time: O(n * m log m + n log n) where n is length of words, m is length of longest word
// space: O(nm)

function groupAnagrams(words) {
  if (!words.length) return words;

  const data = [];
  for (let word of words)
    data.push({ word, sorted: word.split('').sort().join('') });

  data.sort((a, b) => a.sorted < b.sorted ? -1 : a.sorted === b.sorted ? 0 : 1)

  const groupings = [];
  groupings.push([data[0].word]);
  for (let index = 1; index < data.length; index++) {
    const current = data[index];
    (current.sorted === data[index - 1].sorted) ?
      groupings[groupings.length - 1].push(current.word) :
      groupings.push([current.word]);
  }

  return groupings;
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;
