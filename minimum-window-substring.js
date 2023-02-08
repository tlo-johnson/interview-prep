// https://leetcode.com/problems/minimum-window-substring/

const minWindow = (str1, str2) => {
  if (str2.length > str1.length) return '';

  const characters = [];
  for (let character of str2) {
    const key = keyFor(character);
    characters[key] ||= 0;
    characters[key]++;
  }

  let count = str2.length, windowIndexes = [], result = '';
  for (let index = 0; index < str1.length; index++) {
    const character = str1[index];
    const key = keyFor(character);
    if (characters[key] === undefined) continue;

    characters[key]--;
    windowIndexes.push(index);
    if (characters[key] < 0) continue;

    count--;
    if (count !== 0) continue;

    result = updateMinWindow(str1, windowIndexes[0], index, result);
    
    let removedIndex = windowIndexes.shift();
    let removedKey = keyFor(str1[removedIndex]);
    while (++characters[removedKey] <= 0) {
      result = updateMinWindow(str1, windowIndexes[0], index, result);
      removedIndex = windowIndexes.shift();
      removedKey = keyFor(str1[removedIndex]);
    }
    count++;
  }

  return result;
}

const keyFor = character => character.charCodeAt() - 'a'.charCodeAt();

const updateMinWindow = (str, startIndex, endIndex, min) => {
  const substring = str.substring(startIndex, endIndex + 1);
  return (!min || substring.length < min.length) ? substring : min;
}

let str1, str2, expected, actual;

str1 = "ADOBECODEBANC";
str2 = "ABC";
expected = "BANC";
actual = minWindow(str1, str2);
console.assert(expected === actual, '%o', { str1, str2, expected, actual });

str1 = "a";
str2 = "a";
expected = "a";
actual = minWindow(str1, str2);
console.assert(expected === actual, '%o', { str1, str2, expected, actual });

str1 = "a";
str2 = "aa";
expected = "";
actual = minWindow(str1, str2);
console.assert(expected === actual, '%o', { str1, str2, expected, actual });

str1 = "bbbbbbbbbaac";
str2 = "abc";
expected = "baac";
actual = minWindow(str1, str2);
console.assert(expected === actual, '%o', { str1, str2, expected, actual });
