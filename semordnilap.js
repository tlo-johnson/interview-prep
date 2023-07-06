// https://www.algoexpert.io/questions/semordnilap
// time: O(nm) where n is length of array, m is length of longest word
// space: O(nm)

function semordnilap(words) {
  const set = new Set();
  const result = [];

  for (let word of words) {
    if (set.has(word)) {
      result.push([word, reverse(word)]);
      continue;
    }

    set.add(reverse(word));
  }

  return result;
}

const reverse = word => word.split('').reverse().join('');

// Do not edit the line below.
exports.semordnilap = semordnilap;
