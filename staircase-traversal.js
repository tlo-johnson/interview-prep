// https://www.algoexpert.io/questions/staircase-traversal
// time: O(h) where h is height
// space: O(h)

function staircaseTraversal(height, maxSteps) {
  const arr = [1, 1];

  for (let index = 2; index <= height; index++) {
    arr[index] = 2 * arr[index - 1] - (arr[index - maxSteps - 1] || 0);;
  }

  return arr[height];
}

// Do not edit the line below.
exports.staircaseTraversal = staircaseTraversal;
