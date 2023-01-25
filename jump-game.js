const canJump = (nums) => {
  let furthest = 0;
  for (let index = 0; index < nums.length && index <= furthest; index++) {
    furthest = Math.max(furthest, index + nums[index]);
    if (furthest >= nums.length - 1) return true;
  }

  return false;
}

let nums, expected, actual;

nums = [2, 3, 1, 1, 4];
expected = true;
actual = canJump(nums);
console.assert(expected === actual, '%o', { nums, expected, actual });

nums = [3, 2, 1, 0, 4];
expected = false;
actual = canJump(nums);
console.assert(expected === actual, '%o', { nums, expected, actual });

nums = [0, 2, 1, 0, 4];
expected = false;
actual = canJump(nums);
console.assert(expected === actual, '%o', { nums, expected, actual });
