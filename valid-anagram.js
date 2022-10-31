// https://leetcode.com/problems/valid-anagram/?envType=study-plan&id=data-structure-i

const isAnagram = (str1, str2) =>
  str1.length === str2.length &&
  canConstruct(str1, str2);

// function copied from ransom-note.js
const canConstruct = (ransomNote, magazine) => {
  const letters = Array(26).fill(0);

  for (let character of magazine) {
    const index = character.charCodeAt() - "a".charCodeAt();
    letters[index]++;
  }

  for (let character of ransomNote) {
    const index = character.charCodeAt() - "a".charCodeAt();
    if (letters[index] === 0) return false;

    letters[index]--;
  }

  return true;
}

let str1 = "anagram", str2 = "nagaram";
console.log(isAnagram(str1, str2));

str1 = "rat", str2 = "car";
console.log(isAnagram(str1, str2));
