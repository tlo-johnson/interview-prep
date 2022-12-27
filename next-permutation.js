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
  const index = lastNonEqualIndex(nums);

  if (allElementsAreSame(index)) {
    return nums;
  }

  if (endsIncreasing(nums, index)) {
    swap(nums, index);
    return nums;
  }

  const decreasingIndex = startDecreasingIndex(nums, index);
  if (decreasingIndex === 0) {
    reverse(nums);
    return nums;
  }

  findNextPermutation(nums, decreasingIndex);
  return nums;
}

const lastNonEqualIndex = (nums) => {
  let index = nums.length - 1;
  while (index > 0) {
    if (nums[index] !== nums[index - 1]) {
      break;
    }
    index--;
  }

  return index;
}

const allElementsAreSame = (index) => {
  return index === 0;
}

const endsIncreasing = (nums, index) => {
  return nums[index] > nums[index - 1];
}

const swap = (nums, index) => {
  const temp = nums[index];
  nums[index] = nums[index - 1];
  nums[index - 1] = temp;
}

const startDecreasingIndex = (nums, index) => {
  while (index > 0) {
    if (nums[index] > nums[index -1]) {
      break;
    }
    index--;
  }

  return index;
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

const findNextPermutation = (nums, index) => {
  const pivot = nums[index - 1];

  let i = nums.length - 1;
  while (nums[i] <= pivot) {
    i--;
  };

  nums[index - 1] = nums[i];
  nums[i] = pivot;
  reverse(nums, index);
}

// when ending sequence is ascending, swap last two elements
// when ending sequence is descending, let x be the last element before descending sequence. 
//  find smallest element (y) in descending sequence that's greater than x
//  insert y before x
//  sort all elements after y in ascending order

let nums, expected, actual;

nums = [1, 2, 3, 4]; // last sequence ascending. swap last two numbers
expected = [1, 2, 4, 3];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [1, 2, 3, 4], expected, actual });

nums = [1, 2, 4, 3]; // ascending & descending sequences. insert least element from descending sequence that's greater than element previous to descesding sequence before said element
expected = [1, 3, 2, 4];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [1, 2, 4, 3], expected, actual });

nums = [1, 3, 2, 4]; // last sequence ascending. swap last two numbers
expected = [1, 3, 4, 2];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [1, 3, 2, 4], expected, actual });

nums = [1, 3, 4, 2]; // ascending & descending sequences. insert least element from descending sequence that's greater than element previous to descesding sequence before said element
expected = [1, 4, 2, 3];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [1, 3, 4, 2], expected, actual });

nums = [1, 4, 2, 3]; // last subsequence ascending. swap
expected = [1, 4, 3, 2];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [1, 4, 2, 3], expected, actual });

nums = [1, 4, 3, 2]; // last subsequence descending. let x be element before last descending subsequence. from descending subsequence, take lowest number greater than x. insert before x. sort from x to end of array in non-decreasing order
expected = [2, 1, 3, 4];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [1, 4, 3, 2], expected, actual });

nums = [2, 1, 3, 4];
expected = [2, 1, 4, 3];
actual = nextPermutation(nums);
console.assert(strictEquals(expected, actual), '%o', { nums: [2, 1, 3, 4], expected, actual });

nums = [4, 3, 2, 1]; // all descending. reverse array (i.e. swap all elements in the descending part of array)
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
