// https://www.algoexpert.io/questions/invert-binary-tree
// time: O(n)
// space: O(d)

function invertBinaryTree(tree) {
  if (!tree) return;

  const temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;

  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;
