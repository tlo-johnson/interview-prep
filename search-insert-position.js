/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

const searchInsert = (nums, target) => {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      right = mid - 1;
      continue;
    }
    left = mid + 1;
  }

  if (right === -1) return 0;
  if (left === nums.length) return nums.length;
  return nums[left] > target ? left : left + 1;
};

let nums, target, expected, actual;

nums = [1, 3, 5, 7, 9];
target = 0;
expected = 0;
actual = searchInsert(nums, target);
console.assert(expected === actual, '%o', { nums, target, expected, actual });

nums = [1, 3, 5, 7, 9];
target = 1;
expected = 0;
actual = searchInsert(nums, target);
console.assert(expected === actual, '%o', { nums, target, expected, actual });

nums = [1, 3, 5, 7, 9];
target = 4;
expected = 2;
actual = searchInsert(nums, target);
console.assert(expected === actual, '%o', { nums, target, expected, actual });

nums = [1, 3, 5, 7, 9];
target = 13;
expected = 5;
actual = searchInsert(nums, target);
console.assert(expected === actual, '%o', { nums, target, expected, actual });

nums = [1, 3];
target = 2;
expected = 1;
actual = searchInsert(nums, target);
console.assert(expected === actual, '%o', { nums, target, expected, actual });
