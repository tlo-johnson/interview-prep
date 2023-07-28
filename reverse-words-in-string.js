// https://www.algoexpert.io/questions/reverse-words-in-string
// time: O(n)
// space: O(n)

function reverseWordsInString(str) {
  const result = [];
  for (let index = str.length - 1; index >= 0; index--) {
    const character = str[index];
    if (character !== ' ') continue;

    storeWord(str, index + 1, result);
    result.push(' ');
  }
  storeWord(str, 0, result);
  return result.join('');
}

const storeWord = (str, startIndex, result) => {
  while (startIndex < str.length && str[startIndex] !== ' ') result.push(str[startIndex++]);
}

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;
