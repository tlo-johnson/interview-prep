// https://www.algoexpert.io/questions/merge-binary-trees
// time: O(s) where s is the smaller tree
// space: O(log s)

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

const mergeBinaryTrees = (tree1, tree2) => {
  if (!tree1 && !tree2) return tree1;
  if (!tree1) return tree2;
  if (!tree2) return tree1;

  tree1.value += tree2.value;
  tree1.left = mergeBinaryTrees(tree1.left, tree2.left);
  tree1.right = mergeBinaryTrees(tree1.right, tree2.right);

  return tree1;
}

// Do not edit the line below.
exports.mergeBinaryTrees = mergeBinaryTrees;
