/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
*/

const search = (nums, target) => {
  if (nums.length <= 1) {
    return nums[0] === target ? 0 : -1;
  }

  let left = 0, right = nums.length - 1;
  while (left <= right) {
    console.log(left, right);
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    const noPivot = nums[right] > nums[mid] && nums[mid] > nums[left];
    if (noPivot) {
      if (nums[mid] > target) {
        right = mid - 1;
        continue;
      } else {
        left = mid + 1;
      }
    } else {
      const pivotOnRight = nums[right] - nums[mid] < 0;
      if (pivotOnRight) {
        if (target > nums[mid] || target < nums[right]) {
          left = mid + 1;
          continue;
        } else {
          right = mid - 1;
        }
      } else {
        if (target > nums[left] || target < nums[mid]) {
          right = mid - 1;
          continue;
        } else {
          left = mid + 1;
        }
      }
    }
  }

  return -1;
};

let nums, target, expected, actual;

nums = [0, 1, 2, 3, 4, 5];
target = 0;
expected = 0;
actual = search(nums, target);
console.assert(expected === actual, '%o', { nums, target, expected, actual });

nums = [0, 1, 2, 3, 4, 5];
target = 1;
expected = 1;
actual = search(nums, target);
console.assert(expected === actual, '%o', { nums, target, expected, actual });

nums = [0, 1, 2, 3, 4, 5];
target = 4;
expected = 4;
actual = search(nums, target);
console.assert(expected === actual, '%o', { nums, target, expected, actual });

nums = [3, 4, 5, 0, 1, 2];
target = 4;
expected = 1;
actual = search(nums, target);
console.assert(expected === actual, '%o', { nums, target, expected, actual });

nums = [3, 4, 5, 0, 1, 2];
target = 2;
expected = 5;
actual = search(nums, target);
console.assert(expected === actual, '%o', { nums, target, expected, actual });

nums = [0];
target = 0;
expected = 0;
actual = search(nums, target);
console.assert(expected === actual, '%o', { nums, target, expected, actual });

nums = [1];
target = 0;
expected = -1;
actual = search(nums, target);
console.assert(expected === actual, '%o', { nums, target, expected, actual });

nums = [1, 2];
target = 2;
expected = 1;
actual = search(nums, target);
console.assert(expected === actual, '%o', { nums, target, expected, actual });
