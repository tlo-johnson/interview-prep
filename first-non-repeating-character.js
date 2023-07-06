// https://www.algoexpert.io/questions/first-non-repeating-character
// time: O(n)
// space: O(1) because there will be at most 26 characters in either set

function firstNonRepeatingCharacter(str) {
  const repeating = new Set();
  const nonRepeating = new Set();

  for (let character of str) {
    if (repeating.has(character)) continue;

    if (nonRepeating.has(character)) {
      repeating.add(character);
      nonRepeating.delete(character);
      continue;
    }

    nonRepeating.add(character);
  }

  for (let index = 0; index < str.length; index++) {
    if (nonRepeating.has(str[index])) return index;
  }

  return -1;
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
