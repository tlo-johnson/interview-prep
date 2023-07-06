// https://www.algoexpert.io/questions/binary-tree-diameter
// time: O(n)
// space: O(n) worst, O(log n) average

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const binaryTreeDiameter = (tree) => helper(tree).diameter;

const helper = (tree) => {
  if (!tree) return { length: -1, diameter: 0 };

  const left = helper(tree.left);
  const leftLength = left.length + 1;

  const right = helper(tree.right);
  const rightLength = right.length + 1;

  const length = Math.max(leftLength, rightLength);
  const diameter = Math.max(leftLength + rightLength, left.diameter, right.diameter);

  return { length, diameter };
}

// Do not edit the line below.
exports.binaryTreeDiameter = binaryTreeDiameter;
exports.BinaryTree = BinaryTree;
