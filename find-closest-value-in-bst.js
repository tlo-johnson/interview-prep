// https://www.algoexpert.io/questions/find-closest-value-in-bst
// time: O(log n) on average, O(n) worst case
// space: O(1)

function findClosestValueInBst(node, target) {
  if (node === null) return 0;

  let closest = node.value;
  while (node !== null) {
    if (node.value === target) return target;
    if (Math.abs(node.value - target) < Math.abs(closest - target))
      closest = node.value;

    node = node.value > target ? node.left : node.right;
  }

  return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
