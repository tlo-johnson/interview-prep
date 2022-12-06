// https://leetcode.com/problems/3sum/

const threeSum = nums => {
  nums = sort(nums);
  const result = [];

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === nums[index - 1]) continue;

    const pairs = twoSum(nums, 0 - nums[index], index);
    pairs.forEach(pair => result.push([...pair, nums[index]]));
  }

  return result;
}

const sort = nums => {
  if (nums.length === 1) return nums;

  const mid = Math.floor(nums.length / 2);
  const left = sort(nums.slice(0, mid));
  const right = sort(nums.slice(mid));
  return merge(left, right);
}

const merge = (left, right) => {
  const result = [];

  let i = j = 0;
  while (i < left.length && j < right.length)
    left[i] < right[j] ? result.push(left[i++]) : result.push(right[j++]);

  if (i !== left.length) result.push(...left.slice(i));
  if (j !== right.length) result.push(...right.slice(j));
  return result;
}

const twoSum = (nums, target, startIndex) => {
  const compliments = new Set();
  const uniqueSums = new Set();
  const pairs = [];

  for (let index = startIndex; index < nums.length; index++) {
    const num = nums[index];

    if (compliments.has(num) && !uniqueSums.has(num)) {
      pairs.push([num, target - num]);
      uniqueSums.add(num);
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
