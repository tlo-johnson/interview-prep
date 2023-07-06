// https://www.algoexpert.io/questions/validate-bst
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

const validateBst = (tree, options = { min: -Infinity, max: Infinity }) => {
  if (tree === null) return true;

  return tree.value < options.max
    && tree.value >= options.min
    && validateBst(tree.left, { ...options, max: tree.value })
    && validateBst(tree.right, { ...options, min: tree.value });
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;
