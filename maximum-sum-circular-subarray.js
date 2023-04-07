// https://leetcode.com/problems/maximum-sum-circular-subarray/?envType=study-plan&id=dynamic-programming-i

const maxSubarraySumCircular = nums => Math.max(maxCircularSum(nums), maxNonCircularSum(nums));

const maxCircularSum = (nums) => {
  let suffixSum = nums[nums.length - 1];
  const rightMax = [];
  rightMax[nums.length - 1] = nums[nums.length - 1];
  for (let index = nums.length - 2; index >= 0; index--) {
    suffixSum += nums[index];
    rightMax[index] = Math.max(suffixSum, rightMax[index + 1]);
  }

  let maxSum = nums[0], prefixSum = 0;
  for (let index = 0; index < nums.length - 2; index++) {
    prefixSum += nums[index];
    maxSum = Math.max(maxSum, prefixSum + rightMax[index + 1]);
  }

  return maxSum;
}

const maxNonCircularSum = (nums) => {
  const sums = [nums[0]];
  let maxSum = nums[0];
  for (let index = 1; index < nums.length; index++) {
    sums[index] = Math.max(sums[index - 1] + nums[index], nums[index]);
    maxSum = Math.max(maxSum, sums[index]);
  }

  return maxSum;
}
