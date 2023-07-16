// https://www.algoexpert.io/questions/split-binary-tree
// time: O(n)
// space: O(n). can be reduced to O(log n) by iterating twice instead of storing sums in set

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

function splitBinaryTree(tree) {
  const set = new Set();
  const totalSum = gatherTreeInfo(tree, set);
  return set.has(totalSum / 2) ? totalSum / 2 : 0;
}

const gatherTreeInfo = (tree, set) => {
  if (!tree) return 0;
  const sum = tree.value + gatherTreeInfo(tree.left, set) + gatherTreeInfo(tree.right, set);

  if (!set.has(sum)) set.add(sum);
  return sum;
}

// Do not edit the line below.
exports.splitBinaryTree = splitBinaryTree;
