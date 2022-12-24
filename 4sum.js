/*
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

- 0 <= a, b, c, d < n
- a, b, c, and d are distinct.
- nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Example 2:
Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]

Constraints:
1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109
*/

const fourSum = (nums, target) => {
  nums.sort((a, b) => a - b);
}

nums = [1,0,-1,0,-2,2];
target = 0;
expected = [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]];
console.log({ result: fourSum(nums, target), expected });

nums = [2,2,2,2,2];
target = 8;
expected = [[2,2,2,2]];
console.log({ result: fourSum(nums, target), expected });

nums = [-2,-1,-1,1,1,2,2];
target = 0;
expected = [[-2,-1,1,2],[-1,-1,1,1]];
console.log({ result: fourSum(nums, target), expected });

nums = [-500,-481,-480,-469,-437,-423,-408,-403,-397,-381,-379,-377,-353,-347,-337,-327,-313,-307,-299,-278,-265,-258,-235,-227,-225,-193,-192,-177,-176,-173,-170,-164,-162,-157,-147,-118,-115,-83,-64,-46,-36,-35,-11,0,0,33,40,51,54,74,93,101,104,105,112,112,116,129,133,146,152,157,158,166,177,183,186,220,263,273,320,328,332,356,357,363,372,397,399,420,422,429,433,451,464,484,485,498,499];
target = 2139;
expected = [];
console.log({ result: fourSum(nums, target), expected });
