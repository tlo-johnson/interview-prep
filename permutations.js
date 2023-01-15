// https://leetcode.com/problems/permutations/

import { areEquivalent } from './utils/array.js';

const permute = (nums) => {
  const permutations = [];

  for (let index = 0; index < nums.length; index++) {
    if (!index) {
      permutations.push([nums[index]]);
      continue;
    }

    for (let count = permutations.length; count > 0; count--) {
      const permutation = permutations.shift();
      for (let j = 0; j <= permutation.length; j++) {
        permutations.push([...permutation.slice(0, j), nums[index], ...permutation.slice(j)]);
      }
    }
  }

  return permutations;
}

let nums, expected, actual;

nums = [1];
expected = [[1]];
actual = permute(nums);
console.assert(areEquivalent(expected, actual), '%o', { nums, expected, actual });

nums = [1, 2];
expected = [[1, 2], [2, 1]];
actual = permute(nums);
console.assert(areEquivalent(expected, actual), '%o', { nums, expected, actual });

nums = [1, 2, 3];
expected = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]];
actual = permute(nums);
console.assert(areEquivalent(expected, actual), '%o', { nums, expected, actual });

nums = [1, 2, 3, 4];
expected = 24;
actual = permute(nums);
console.assert(expected === actual.length, `number of permutations. expected: ${expected}, actual: ${actual.length}`);

nums = [1, 2, 3, 4, 5];
expected = 120;
actual = permute(nums);
console.assert(expected === actual.length, `number of permutations. expected: ${expected}, actual: ${actual.length}`);
