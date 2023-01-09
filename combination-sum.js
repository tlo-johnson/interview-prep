// https://leetcode.com/problems/combination-sum/

import { areEquivalent } from './utils/array.js';

const combinationSum = (candidates, target, results = [], nums = [], set = new Set()) => {
  const key = nums.sort().join();
  if (set.has(key)) {
    return results;
  }

  set.add(key);

  if (target === 0) {
    results.push(nums);
    return results;
  }

  if (target < 0) {
    return results;
  }

  for (let candidate of candidates) {
    combinationSum(candidates, target - candidate, results, [...nums, candidate], set);
  }

  return results;
}

let candidates, target, actual, expected;

candidates = [2, 3, 5];
target = 8;
expected = [[2,2,2,2],[2,3,3],[3,5]];
actual = combinationSum(candidates, target);
console.assert(areEquivalent(expected, actual), '%o', { candidates, target, expected, actual });

candidates = [2];
target = 1;
expected = [];
actual = combinationSum(candidates, target);
console.assert(areEquivalent(expected, actual), '%o', { candidates, target, expected, actual });

candidates = [2, 3, 4, 5];
target = 10;
expected = [[2, 2, 2, 2, 2], [2, 2, 3, 3], [2, 2, 2, 4], [2, 3, 5], [2, 4, 4], [3, 3, 4], [5, 5]];
actual = combinationSum(candidates, target);
console.assert(areEquivalent(expected, actual), '%o', { candidates, target, expected, actual });

// this takes some time if solution is inefficient
candidates = [7,12,5,10,9,4,6,8];
target = 32;
expected = [];
console.time('performance');
actual = combinationSum(candidates, target);
console.timeEnd('performance');
