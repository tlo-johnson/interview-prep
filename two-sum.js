// https://leetcode.com/problems/two-sum/?envType=study-plan&id=data-structure-i

const twoSum = (nums, target) => {
  const pairs = {};

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const difference = target - num;
    const pair = pairs[difference];

    if (pair || pair === 0) return [pair, index];
    pairs[num] = index;
  };
}

console.log(twoSum([2,7,11,15], 9));
