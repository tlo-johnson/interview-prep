// https://leetcode.com/problems/maximum-subarray/?envType=study-plan&id=data-structure-i
// solution: kadane's algorithm

const maxSubArray_kadane = nums => {
  let maxSum = -Infinity;
  let sum = 0;

  for (let num of nums) {
    sum += num;
    maxSum = Math.max(sum, maxSum);
    sum = Math.max(sum, 0);
  }

  return maxSum;
};

const maxSubArray_divideConquer = nums => divideConquer(nums);

const divideConquer = nums => {
  if (nums.length <= 1) return nums[0];

  const midIndex = Math.floor(nums.length / 2);

  const leftArray = nums.slice(0, midIndex);
  const left = divideConquer(leftArray);

  const rightArray = nums.slice(midIndex);
  const right = divideConquer(rightArray);

  const mid = maxFromMid(leftArray, rightArray);

  return [left, right, mid].reduce((prev, curr) => prev > curr ? prev : curr);
};

const maxFromMid = (leftArray, rightArray) => {
  let leftMaxSum = rightMaxSum = -Infinity;

  let sum = 0;
  for (let index = leftArray.length - 1; index >= 0; index--) {
    sum += leftArray[index];
    if (sum > leftMaxSum) leftMaxSum = sum;
  }

  sum = 0;
  for (let index = 0; index < rightArray.length; index++) {
    sum += rightArray[index];
    if (sum > rightMaxSum) rightMaxSum = sum;
  }

  return (leftMaxSum > 0 && rightMaxSum > 0) ?
    leftMaxSum + rightMaxSum : Math.max(leftMaxSum, rightMaxSum);
}

console.log({ expected: 6, actual: maxSubArray_divideConquer([-2,1,-3,4,-1,2,1,-5,4]) });
console.log({ expected: 1, actual: maxSubArray_divideConquer([-2, 1]) });
console.log({ expected: 1, actual: maxSubArray_divideConquer([1]) });
console.log({ expected: -1, actual: maxSubArray_divideConquer([-1]) });
console.log({ expected: 23, actual: maxSubArray_divideConquer([5,4,-1,7,8]) });
