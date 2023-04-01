// https://leetcode.com/problems/binary-search/

const search = (nums, target) => {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target)
      return mid;

    if (nums[mid] > target) {
      right = mid - 1;
      continue;
    }

    left = mid + 1;
  }

  return -1;
}
