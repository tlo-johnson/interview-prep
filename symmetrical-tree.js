// https://www.algoexpert.io/questions/symmetrical-tree
// time: O(n)
// space: O(log n)

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

function symmetricalTree(tree1) {
  return areSymmetricalTrees(tree1.left, tree1.right);
}

const areSymmetricalTrees = (tree1, tree2) => {
  if (!tree1 && !tree2) return true;
  if (!tree1 || !tree2) return false;
  return tree1.value === tree2.value &&
    areSymmetricalTrees(tree1.left, tree2.right) &&
    areSymmetricalTrees(tree1.right, tree2.left);
}

// Do not edit the line below.
exports.symmetricalTree = symmetricalTree;
