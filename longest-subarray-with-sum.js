// https://www.algoexpert.io/questions/longest-subarray-with-sum
// time: O(n)
// space: O(1)

function longestSubarrayWithSum(array, targetSum) {
  let max = [], leftIndex = rightIndex = 0, sum = array[rightIndex];
  while (rightIndex < array.length) {
    if (sum === targetSum) {
      if (!max.length) max = [leftIndex, rightIndex];
      else max = (rightIndex - leftIndex) > (max[1] - max[0]) ? [leftIndex, rightIndex] : max;
      sum += array[++rightIndex];
      continue;
    }

    if (sum < targetSum) sum += array[++rightIndex];
    else sum -= array[leftIndex++];

    if (leftIndex > rightIndex) sum += array[++rightIndex];
  }

  return max;
}

// Do not edit the line below.
exports.longestSubarrayWithSum = longestSubarrayWithSum;
