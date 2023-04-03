// https://leetcode.com/problems/house-robber-ii/?envType=study-plan&id=dynamic-programming-i

const rob = nums => {
  if (nums.length <= 3)
    return Math.max(...nums);

  const maxFromZero = findMax(nums, 0, nums.length - 2);
  const maxFromOne = findMax(nums, 1, nums.length - 1);
  return Math.max(maxFromZero, maxFromOne);
}

const findMax = (nums, startIndex, index, money = {}) => {
  if (index < startIndex)
    return 0;

  if (money[index] === undefined)
    money[index] = Math.max(findMax(nums, startIndex, index - 2, money) + nums[index], findMax(nums, startIndex, index - 1, money));

  return money[index];
}
