/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 */

const removeElement = (nums, val) => {
  let insertIndex = 0;

  for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
    if (nums[currentIndex] !== val) {
      nums[insertIndex++] = nums[currentIndex];
    }
  }

  return insertIndex;
}

let result, expected, nums, val;

nums = [1];
val = 1;
expected = [];
result = removeElement(nums, val);
console.assert(result === expected.length, '%o', { nums, val, expected, result });
for (let i = 0; i < result; i++) {
  console.assert(nums[i] === expected[i], '%o', { nums, expected });
}

nums = [1, 1, 1, 2, 2, 3, 4];
val = 1;
expected = [2, 2, 3, 4];
result = removeElement(nums, val);
console.assert(result === expected.length, '%o', { nums, val, expected, result });
for (let i = 0; i < result; i++) {
  console.assert(nums[i] === expected[i], '%o', { nums, expected });
}

nums = [];
val = 1;
expected = [];
result = removeElement(nums, val);
console.assert(result === expected.length, '%o', { nums, val, expected, result });
for (let i = 0; i < result; i++) {
  console.assert(nums[i] === expected[i], '%o', { nums, expected });
}
