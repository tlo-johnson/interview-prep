// https://leetcode.com/problems/jump-game-ii/

const jump = (nums) => {
  const allJumps = {
    [nums.length - 1]: 1 // makes for easier code
  };

  for (let index = nums.length - 2; index >= 0; index--) {
    for (let jumps = nums[index]; jumps >= 1; jumps--) {
      const destination = index + jumps;
      if (!allJumps[destination]) {
        continue;
      }

      const numJumps = allJumps[destination] + 1;

      allJumps[index] = allJumps[index] ?
        Math.min(allJumps[index], numJumps) :
        numJumps;
    }
  }

  return allJumps[0] - 1; // subtract the extra jump from allJumps initialization
}

// April 4, 2023
const jump = nums => {
  let minJumps = { 0: 0 };
  for (let index = 0; index < nums.length; index++) {
    const endIndex = nums[index] + index;
    if (minJumps[endIndex] !== undefined) {
      continue;
    }

    for (let count = index + 1; count <= endIndex; count++) {
      if (minJumps[count] === undefined) {
        minJumps[count] = minJumps[index] + 1;
      }
    }
  }

  return minJumps[nums.length - 1];
}

let nums, expected, actual;

nums = [2, 3, 1, 1, 4];
expected = 2;
actual = jump(nums);
console.assert(expected === actual, '%o', { nums, expected, actual });

nums = [2, 3, 0, 1, 4];
expected = 2;
actual = jump(nums);
console.assert(expected === actual, '%o', { nums, expected, actual });

nums = [1, 1, 1, 1, 1];
expected = 4;
actual = jump(nums);
console.assert(expected === actual, '%o', { nums, expected, actual });

nums = [4, 3, 2, 1, 1];
expected = 1;
actual = jump(nums);
console.assert(expected === actual, '%o', { nums, expected, actual });
