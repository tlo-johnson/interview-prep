// https://leetcode.com/problems/first-unique-characteracter-in-a-string/?envType=study-plan&id=data-structure-i

const firstUniqChar = str => {
  const counts = {};

  for (let character of str)
    counts[character] ? counts[character]++ : counts[character] = 1;

  for (let index = 0; index < str.length; index++) {
    const character = str[index];
    if (counts[character] === 1) return index;
  }

  return -1;
}

let str = "leetcode"
console.log(firstUniqChar(str));

str = "loveleetcode"
console.log(firstUniqChar(str));

str = "aabb"
console.log(firstUniqChar(str));
