// https://www.algoexpert.io/questions/validate-three-nodes
// time: O(d) where d is distance between nodeOne and nodeThree
// space: O(1)

// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
  return isValid(nodeOne, nodeTwo, nodeThree) || isValid(nodeThree, nodeTwo, nodeOne);
}

const isValid = (ancestor, middle, descendant) => {
  let node = ancestor;
  let midFound = false;

  while (node) {
    if (descendant.value === node.value) return midFound;
    if (node === middle) midFound = true;
    node = (descendant.value < node.value) ? node.left : node.right;
  }

  return false;
}

// Do not edit the lines below.
exports.BST = BST;
exports.validateThreeNodes = validateThreeNodes;
