// https://leetcode.com/problems/combination-sum-ii/

import { areEquivalent } from "./utils/array.js";

const combinationSum2 = (candidates, target, results = [], nums = [], set = new Set()) => {
  const key = nums.sort().join();

  if (set.has(key)) {
    return results;
  }

  set.add(key);

  if (target === 0) {
    results.push(nums);
    return results;
  }

  if (!candidates.length || target < 0) {
    return results;
  }

  for (let index = 0; index < candidates.length; index++) {
    const candidate = candidates[index];
    const newCandidates = candidates.filter((_, i) => i !== index);
    const newNums = [...nums, candidate];

    combinationSum2(newCandidates, target - candidate, results, newNums, set);
  }

  return results;
}

let candidates, target, expected, actual;

candidates = [1, 2, 3, 4, 5];
target = 10;
expected = [[1, 4, 5], [1, 2, 3, 4], [2, 3, 5]];
actual = combinationSum2(candidates, target);
console.assert(areEquivalent(expected, actual), '%o', { candidates, target, expected, actual });

candidates = [2, 2, 2, 3, 4, 5];
target = 10;
expected = [[2, 2, 2, 4], [2, 3, 5]];
actual = combinationSum2(candidates, target);
console.assert(areEquivalent(expected, actual), '%o', { candidates, target, expected, actual });

candidates = [1];
target = 1;
expected = [[1]];
actual = combinationSum2(candidates, target);
console.assert(areEquivalent(expected, actual), '%o', { candidates, target, expected, actual });
