// https://leetcode.com/problems/group-anagrams/

import { areEquivalent } from "./utils/array.js";

const groupAnagrams = (strs) => {
  const groups = { };

  for (let str of strs) {
    const key = str.split('').sort().join('');
    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(str);
  }

  return Object.values(groups);
}

let strs, expected, actual;

strs = ["eat","tea","tan","ate","nat","bat"];
expected = [["bat"],["nat","tan"],["ate","eat","tea"]];
actual = groupAnagrams(strs);
console.assert(areEquivalent(expected, actual), '%o', { strs, expected, actual });

strs = ["a"];
expected = [["a"]];
actual = groupAnagrams(strs);
console.assert(areEquivalent(expected, actual), '%o', { strs, expected, actual });

strs = [''];
expected = [['']];
actual = groupAnagrams(strs);
console.assert(areEquivalent(expected, actual), '%o', { strs, expected, actual });
