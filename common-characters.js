// https://www.algoexpert.io/questions/common-characters
// time: O(nm), where n is number of characters, m is length of input
// space: O(n)

function commonCharacters(strs) {
  let occurrences = new Set(strs[0].split(''));

  for (let str of strs) {
    const characters = getUniqueCharacters(str);
    occurrences = filter(characters, occurrences);
  }

  return Array.from(occurrences);
}

const getUniqueCharacters = str => {
  const unique = new Set();

  for (let character of str) {
    if (unique.has(character)) continue;
    unique.add(character);
  }

  return Array.from(unique);
}

const filter = (characters, occurrences) => {
  const newOccurrences = new Set();

  for (let character of characters) {
    if (occurrences.has(character))
      newOccurrences.add(character);
  }

  return newOccurrences;
}

// Do not edit the line below.
exports.commonCharacters = commonCharacters;
