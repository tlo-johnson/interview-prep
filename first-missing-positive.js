/*
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.
*/

const firstMissingPositive = nums => {
  for (let index = 0; index < nums.length; index++) {
    const num = Math.floor(nums[index] - 1);
    if (num >= 0 && num < nums.length)
      nums[num] += 0.1;
  }

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    if (num === Math.floor(num)) return index + 1;
  }

  return nums.length + 1;
};

let actual, expected, nums;

nums = [-1, -2];
expected = 1;
actual = firstMissingPositive(nums);
console.assert(expected === actual, '%o', { nums, expected, actual });

nums = [1, 2];
expected = 3;
actual = firstMissingPositive(nums);
console.assert(expected === actual, '%o', { nums, expected, actual });

nums = [0, 2];
expected = 1;
actual = firstMissingPositive(nums);
console.assert(expected === actual, '%o', { nums, expected, actual });

nums = [3,4,-1,1];
expected = 2;
actual = firstMissingPositive(nums);
console.assert(expected === actual, '%o', { nums, expected, actual });
