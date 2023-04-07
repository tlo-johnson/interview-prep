// https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/?envType=study-plan&id=dynamic-programming-i

const getMaxLen = (nums) => {
  let positiveIndex = negativeIndex = result = 0;
  let product = 1;

  for (let index = 0; index < nums.length; index++) {
    product *= nums[index];
    if (product === 0) {
      positiveIndex = index + 1;
      negativeIndex = index + 1;
      continue;
    }

    if (product > 0 && nums[index] < 0) {
      result = Math.max(result, index - negativeIndex);

      const temp = positiveIndex;
      positiveIndex = negativeIndex;
      negativeIndex = temp;
    }

    if (product > 0 && nums[index] > 0) {
      negativeIndex = 
  }
}
