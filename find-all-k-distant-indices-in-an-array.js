// https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/

const findKDistantIndices = (nums, key, distance) => {
  const result = [];
  let countIndex = 0;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== key) continue;

    countIndex = Math.max(countIndex, index - distance);
    while (countIndex <= index + distance && countIndex < nums.length)
      result.push(countIndex++);
  }

  return result;
}
