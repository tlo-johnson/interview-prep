// https://www.algoexpert.io/questions/kadane's-algorithm
// time: O(n)
// space: O(1)

function kadanesAlgorithm(array) {
  let sum = 0;
  let maxSum = -Infinity;

  for (let element of array) {
    sum += element;
    maxSum = Math.max(sum, maxSum);

    if (sum < 0) sum = 0;
  }

  return maxSum;
}

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm;
