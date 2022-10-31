// https://leetcode.com/problems/ransom-note/?envType=study-plan&id=data-structure-i

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

let ransomNote = "a", magazine = "b"
console.log(canConstruct(ransomNote, magazine));

ransomNote = "aa", magazine = "ab"
console.log(canConstruct(ransomNote, magazine));

ransomNote = "aa", magazine = "aab"
console.log(canConstruct(ransomNote, magazine));
