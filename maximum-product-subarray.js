// https://leetcode.com/problems/maximum-product-subarray/?envType=study-plan&id=dynamic-programming-i

const maxProduct = (nums) => {
  let max = min = result = nums[0];

  for (let index = 1; index < nums.length; index++) {
    const num = nums[index];
    const newMax = Math.max(max * num, min * num, num);
    const newMin = Math.min(max * num, min * num, num);

    result = Math.max(result, newMax, newMin);
    max = newMax;
    min = newMin;
  }

  return result;
}
