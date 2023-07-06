// https://www.algoexpert.io/questions/find-successor
// time: O(log n) since we need to traverse up the tree when (!node.right && node.parent.right === node)
// space: O(1)

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  if (!node.right && !node.parent) return null;
  if (!node.right && node.parent.left === node) return node.parent;

  if (!node.right && node.parent.right === node) {
    let temp = node.parent;
    while (temp.parent && temp.parent.right === temp) temp = temp.parent;
    return temp.parent ? temp.parent : null;
  }

  if (node.right) {
    let temp = node.right;
    while (temp.left) temp = temp.left;
    return temp;
  }
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;
