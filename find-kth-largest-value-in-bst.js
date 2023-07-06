// https://www.algoexpert.io/questions/find-kth-largest-value-in-bst
// time: O(n)
// space: O(n)

// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  return helper(tree, k).value;
}

const helper = (tree, k) => {
  if (tree === null) return { value: null, k };

  let result = helper(tree.right, k);
  if (result.value || result.value === 0) return result;

  if (--result.k === 0) return { value: tree.value };

  return helper(tree.left, result.k);
}

// Do not edit the lines below.
exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;
