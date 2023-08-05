// https://www.algoexpert.io/questions/max-path-sum-in-binary-tree
// time: O(n)
// space: O(log n)

function maxPathSum(tree) {
  if (tree === null) return 0;

  const global = { maxSum: -Infinity };
  const leftSum = walk(tree.left, global);
  const rightSum = walk(tree.right, global);
  const maxSumThroughRoot = Math.max(leftSum + tree.value, rightSum + tree.value, leftSum + rightSum + tree.value);
  return Math.max(global.maxSum, maxSumThroughRoot);
}

const walk = (node, global) => {
  if (!node) return 0;

  const leftSum = walk(node.left, global);
  const rightSum = walk(node.right, global);

  const localMax = Math.max(leftSum + node.value, rightSum + node.value, leftSum + rightSum + node.value);
  if (localMax > global.maxSum) global.maxSum = localMax;

  return Math.max(leftSum, rightSum) + node.value;
}

// Do not edit the line below.
exports.maxPathSum = maxPathSum;
