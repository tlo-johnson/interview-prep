/*
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.
*/

import { strictEquals } from './utils/array.js';

const nextPermutation = (nums) => {
  const index = firstNonDecreasingElement(nums);
  if (index === -1) {
    reverse(nums);
    return nums;
  }

  const swapIndex = findSwapIndex(nums, index);
  swap(nums, index, swapIndex);
  reverse(nums, index + 1);
  return nums;
}

const firstNonDecreasingElement = (nums) => {
  if (nums.length <= 1) return -1;

  let index = nums.length - 1;
  while (nums[index] <= nums[index - 1]) {
    index--;
    if (index === 0) break;
  }

  return index ? index - 1 : -1;
}

const reverse = (nums, startIndex = 0) => {
  let left = startIndex;
  let right = nums.length - 1;

  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

const findSwapIndex = (nums, index) => {
  const num = nums[index];
  while (nums[index + 1] > num) {
    index++;
  }
  return index;
}

const swap = (nums, index1, index2) => {
  const temp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = temp;
}

let nums, expected, actual;

nums = [1, 2, 3, 4];
expected = [1, 2, 4, 3];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [1, 2, 3, 4], expected, actual });

nums = [1, 2, 4, 3];
expected = [1, 3, 2, 4];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [1, 2, 4, 3], expected, actual });

nums = [1, 3, 2, 4];
expected = [1, 3, 4, 2];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [1, 3, 2, 4], expected, actual });

nums = [1, 3, 4, 2];
expected = [1, 4, 2, 3];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [1, 3, 4, 2], expected, actual });

nums = [1, 4, 2, 3];
expected = [1, 4, 3, 2];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [1, 4, 2, 3], expected, actual });

nums = [1, 4, 3, 2];
expected = [2, 1, 3, 4];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [1, 4, 3, 2], expected, actual });

nums = [2, 1, 3, 4];
expected = [2, 1, 4, 3];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [2, 1, 3, 4], expected, actual });

nums = [4, 3, 2, 1];
expected = [1, 2, 3, 4];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [4, 3, 2, 1], expected, actual });

nums = [1, 2, 2, 3, 3, 4];
expected = [1, 2, 2, 3, 4, 3];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [1, 2, 2, 3, 3, 4], expected, actual });

nums = [1, 2, 4, 3, 3, 2];
expected = [1, 3, 2, 2, 3, 4];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [1, 2, 4, 3, 3, 2], expected, actual });

nums = [2, 2, 2, 2];
expected = [2, 2, 2, 2];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [2, 2, 2, 2], expected, actual });

nums = [2, 2, 3, 3];
expected = [2, 3, 2, 3];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [2, 2, 3, 3], expected, actual });

nums = [4, 4, 4, 3, 3];
expected = [3, 3, 4, 4, 4];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [4, 4, 4, 3, 3], expected, actual });

nums = [1, 3, 2];
expected = [2, 1, 3];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [1, 3, 2], expected, actual });
