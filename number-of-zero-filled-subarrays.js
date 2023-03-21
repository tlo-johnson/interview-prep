// https://leetcode.com/problems/number-of-zero-filled-subarrays/

const zeroFilledSubarray = nums => {
  let result = 0;
  let currentCount = 0;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== 0)
      continue;

    currentCount++;
    if (nums[index + 1] === 0)
      continue;

    while (currentCount > 0)
      result += currentCount--;
  }

  return result;
}

/*
    [0] => 1
    [0, 0] => 3
    [0, 0, 0] => 6
    [0, 0, 0, 0] => 10
    [0, ..., 0] => length + (length - 1) + ... + 1 => length * (length + 1) / 2
*/
