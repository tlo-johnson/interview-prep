// https://leetcode.com/problems/length-of-last-word/

const lengthOfLastWord = str => {
  const words = str.trimEnd().split(' ');
  return words[words.length - 1].length;
}
