// https://www.algoexpert.io/questions/missingNumbers
// time: O(n)
// space: O(1)

function missingNumbers(nums) {
  nums.push(Infinity);
  nums.push(Infinity);

  for (let num of nums) {
    if (Math.abs(num) === Infinity) continue;
    const index = Math.abs(num) - 1;
    nums[index] = nums[index] ? nums[index] * -1 : -Infinity;
  }

  const result = [];
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] < 0) continue;
    result.push(index + 1);
  }

  return result;
}

// Do not edit the line below.
exports.missingNumbers = missingNumbers;
