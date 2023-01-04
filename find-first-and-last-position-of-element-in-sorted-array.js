/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
*/

import { areEquivalent } from './utils/array.js';

const searchRange = (nums, target) => {
  const start = searchForStart(nums, target);
  const end = searchForEnd(nums, target);
  return [start, end];
}

const searchForStart = (nums, target) => {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
      continue;
    }

    if (nums[mid] === target && (nums[mid - 1] < target || mid === 0)) {
      return mid;
    }

    if (nums[mid] === target) {
      right = mid - 1;
      continue;
    }

    if (nums[mid] < target && nums[mid + 1] === target) {
      return mid + 1;
    }

    left = mid + 1;
  }

  return -1;
}

const searchForEnd = (nums, target) => {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
      continue;
    }

    if (nums[mid] === target && (nums[mid + 1] > target || mid === nums.length - 1)) {
      return mid;
    }

    if (nums[mid] === target) {
      left = mid + 1;
      continue;
    }

    if (nums[mid] > target && nums[mid - 1] === target) {
      return mid - 1;
    }

    right = mid - 1;
  }

  return -1;
}

let nums, target, expected, actual;

nums = [5, 7, 7, 10, 10, 11, 12];
target = 8;
expected = [-1, -1];
actual = searchRange(nums, target);
console.assert(areEquivalent(expected, actual), '%o', { nums, target, expected, actual });

nums = [];
target = 0;
expected = [-1, -1];
actual = searchRange(nums, target);
console.assert(areEquivalent(expected, actual), '%o', { nums, target, expected, actual });

nums = [5, 7, 7, 8, 10];
target = 8;
expected = [3, 3];
actual = searchRange(nums, target);
console.assert(areEquivalent(expected, actual), '%o', { nums, target, expected, actual });

nums = [5, 7, 7, 8, 8, 10];
target = 8;
expected = [3, 4];
actual = searchRange(nums, target);
console.assert(areEquivalent(expected, actual), '%o', { nums, target, expected, actual });

nums = [8, 8, 9, 9, 9];
target = 8;
expected = [0, 1];
actual = searchRange(nums, target);
console.assert(areEquivalent(expected, actual), '%o', { nums, target, expected, actual });

nums = [8, 9, 9, 9];
target = 8;
expected = [0, 0];
actual = searchRange(nums, target);
console.assert(areEquivalent(expected, actual), '%o', { nums, target, expected, actual });

nums = [8, 8, 8];
target = 8;
expected = [0, 2];
actual = searchRange(nums, target);
console.assert(areEquivalent(expected, actual), '%o', { nums, target, expected, actual });

nums = [8, 8];
target = 8;
expected = [0, 1];
actual = searchRange(nums, target);
console.assert(areEquivalent(expected, actual), '%o', { nums, target, expected, actual });

nums = [5, 7, 7, 8];
target = 8;
expected = [3, 3];
actual = searchRange(nums, target);
console.assert(areEquivalent(expected, actual), '%o', { nums, target, expected, actual });

nums = [5, 7, 7, 8, 8];
target = 8;
expected = [3, 4];
actual = searchRange(nums, target);
console.assert(areEquivalent(expected, actual), '%o', { nums, target, expected, actual });

nums = [2, 4];
target = 4;
expected = [1, 1];
actual = searchRange(nums, target);
console.assert(areEquivalent(expected, actual), '%o', { nums, target, expected, actual });

nums = [2, 4];
target = 2;
expected = [0, 0];
actual = searchRange(nums, target);
console.assert(areEquivalent(expected, actual), '%o', { nums, target, expected, actual });

nums = [2, 4];
target = 8;
expected = [-1, -1];
actual = searchRange(nums, target);
console.assert(areEquivalent(expected, actual), '%o', { nums, target, expected, actual });
