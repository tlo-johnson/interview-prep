// https://www.algoexpert.io/questions/reconstruct-bst
// time: O(n)
// space: O(n) worst, O(log n) avg

// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(preOrderTraversalValues) {
  const data = { currentIndex: 0 }
  const root = new BST(preOrderTraversalValues[data.currentIndex++]);

  helper(root, preOrderTraversalValues, -Infinity, root.value, data);
  helper(root, preOrderTraversalValues, root.value, Infinity, data);

  return root;
}

const helper = (node, values, minValue, maxValue, data) => {
  if (data.currentIndex === values.length) return;

  let value = values[data.currentIndex];
  if (value < node.value && value >= minValue) {
    node.left = new BST(value);
    data.currentIndex++;
    helper(node.left, values, minValue, node.value, data);
  }

  if (data.currentIndex === values.length) return;

  value = values[data.currentIndex];
  if (value >= node.value && value < maxValue) {
    node.right = new BST(value);
    data.currentIndex++;
    helper(node.right, values, node.value, maxValue, data);
  }
}

// Do not edit the lines below.
exports.BST = BST;
exports.reconstructBst = reconstructBst;
