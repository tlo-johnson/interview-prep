// https://leetcode.com/problems/3sum/

const threeSum = nums => {
  const result = [];
  const unique = new Set();

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === nums[index - 1]) continue;

    const num = nums[index];
    const pairs = twoSum(nums, 0 - num, index);
    pairs.forEach(pair => {
      const key = `${Math.min(num, ...pair)}|${Math.max(num, ...pair)}`;
      if (unique.has(key)) return;

      unique.add(key);
      result.push([num, ...pair]);
    });
  }

  return result;
}

const twoSum = (nums, target, ignoreIndex) => {
  const compliments = new Set();
  const pairs = [];

  for (let index = 0; index < nums.length; index++) {
    if (index === ignoreIndex) continue;
    const num = nums[index];

    if (compliments.has(num)) {
      pairs.push([num, target - num]);
      continue;
    }

    compliments.add(target - num);
  }

  return pairs;
}

nums = [-1,0,1,2,-1,-4];
expected = [[-1,-1,2],[-1,0,1]]
actual = threeSum(nums);
console.assert(threeSum(nums) === expected, '%o', { nums, expected, actual });

nums = [0,1,1];
expected = []
actual = threeSum(nums);
console.assert(threeSum(nums) === expected, '%o', { nums, expected, actual });

nums = [0,0,0];
expected = [[0,0,0]]
actual = threeSum(nums);
console.assert(threeSum(nums) === expected, '%o', { nums, expected, actual });

nums = [3,0,-2,-1,1,2];
expected = [[-2,-1,3],[-2,0,2],[-1,0,1]];
actual = threeSum(nums);
console.assert(threeSum(nums) === expected, '%o', { nums, expected, actual });
