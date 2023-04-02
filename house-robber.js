// https://leetcode.com/problems/house-robber/?envType=study-plan&id=dynamic-programming-i

const rob = nums => {
  if (nums.length === 1)
    return nums[0];

  const maxMoney = [nums[0], Math.max(nums[0], nums[1])];
  for (let index = 2; index < nums.length; index++)
    maxMoney[index] = Math.max(maxMoney[index - 1], nums[index] + maxMoney[index - 2]);

  return maxMoney[nums.length - 1];
}
