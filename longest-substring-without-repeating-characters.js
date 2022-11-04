// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = str => {
  const uniqueCharacters = new Set();
  let result = left = 0;

  for (let character of str) {
    if (uniqueCharacters.has(character)) {
      while (str[left] !== character) {
        uniqueCharacters.delete(str[left++]);
      }
      left++;
    } else {
      uniqueCharacters.add(character);
      result = Math.max(uniqueCharacters.size, result);
    }
  }

  return result;
}

let str = "abcabcbb";
console.log(lengthOfLongestSubstring(str));

str = "bbbbb";
console.log(lengthOfLongestSubstring(str));

str = "pwwkew";
console.log(lengthOfLongestSubstring(str));
