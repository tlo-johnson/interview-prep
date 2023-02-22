// https://leetcode.com/problems/sort-array-by-parity/

import { areEquivalent } from './utils/array.js';

const sortArrayByParity = nums => {
  let swapIndex = -1;

  for (let countIndex = 0; countIndex < nums.length; countIndex++) {
    if (nums[countIndex] % 2 === 0)
      swap(nums, ++swapIndex, countIndex);
  }

  return nums;
}

const swap = (nums, start, end) => {
  const temp = nums[start];
  nums[start] = nums[end];
  nums[end] = temp;
}

const nums = [1, 2, 3, 4, 5];
const expected = [2, 4, 3, 1, 5];
const actual = sortArrayByParity(nums);
console.assert(areEquivalent(expected, actual), '%o', { nums, expected, actual });
