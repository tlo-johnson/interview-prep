// https://www.algoexpert.io/questions/height-balanced-binary-tree
// time: O(n)
// space: O(n) worst case, O(h) avg case

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
  const left = getTreeInfo(tree.left);
  const right = getTreeInfo(tree.right);
  return left.isBalanced && right.isBalanced && Math.abs(left.height - right.height) <= 1;
}

const getTreeInfo = node => {
  if (!node) return { isBalanced: true, height: -1 };

  const left = getTreeInfo(node.left);
  const right = getTreeInfo(node.right);
  return {
    isBalanced: left.isBalanced && right.isBalanced && Math.abs(left.height - right.height) <= 1,
    height: Math.max(left.height, right.height) + 1
  }
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.heightBalancedBinaryTree = heightBalancedBinaryTree;
