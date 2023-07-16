// https://www.algoexpert.io/questions/max-subset-sum-no-adjacent
// time: O(n)
// space: O(1)

function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];

  array[1] = Math.max(array[0], array[1]);
  for (let index = 2; index < array.length; index++)
    array[index] = Math.max(array[index - 1], array[index - 2] + array[index]);

  return array[array.length - 1];
}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
