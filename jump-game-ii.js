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

/*
 * optimization: because you're always guaranteed a solution (problem constraints) this
 * question simplifies to finding the minimum number of jumps to get to the last element
 * (i.e. the hash table keeping track of whether one can get to an index is unnecessary
 *
 * var jump = function(nums) {
 *  let jumps = 0;
 *  let curEnd = 0;
 *  let curFarthest = 0;
 *  for (let i = 0; i < nums.length; i++) {
 *    if (i > curEnd) {
 *      jumps++;
 *      curEnd = curFarthest;
 *    }
 *    curFarthest = Math.max(curFarthest, i + nums[i]);
 *  }
 *  return jumps;
 * };
 */

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
