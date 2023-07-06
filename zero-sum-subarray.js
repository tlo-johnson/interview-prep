// https://www.algoexpert.io/questions/zero-sum-subarray
// time: O(n)
// space: O(n)

function zeroSumSubarray(nums) {
  const set = new Set();
  let sum = 0;

  set.add(sum);

  for (let num of nums) {
    sum += num;
    if (set.has(sum)) return true;
    set.add(sum);
  }

  return false;
}

// Do not edit the line below.
exports.zeroSumSubarray = zeroSumSubarray;
