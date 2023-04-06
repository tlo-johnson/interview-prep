// https://leetcode.com/problems/maximum-sum-circular-subarray/?envType=study-plan&id=dynamic-programming-i

const maxSubarraySumCircular = nums => {
  const firstNegativeIndex = findFirstNegativeValue(nums);

  return (firstNegativeIndex === -1)  ?
    nums.reduce((acc, curr) => acc + curr) :
    maxSubArray(nums, firstNegativeIndex);
}

const findFirstNegativeValue = nums => {
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] < 0) {
      return index;
    }
  }

  return -1;
}

const maxSubArray = (nums, firstNegativeIndex) => {
  let previousMaxSum = nums[firstNegativeIndex];
  let maxSum = previousMaxSum;

  let index = firstNegativeIndex + 1;
  while (index !== firstNegativeIndex) {
    if (index === nums.length) {
      index = 0;
      continue;
    }

    const currentMaxSum = Math.max(previousMaxSum + nums[index], nums[index]);
    maxSum = Math.max(maxSum, currentMaxSum);
    previousMaxSum = currentMaxSum;
    index++;
  }

  return maxSum;
}
