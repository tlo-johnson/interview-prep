// https://www.algoexpert.io/questions/repair-bst
// time: O(n)
// space: O(log n)

// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BST = BST;

const repairBst = root => {
  const nodes = [];
  walkTree(root, nodes);
  swapNodes(nodes);

  return root;
}

function walkTree(node, nodes = [], previousNode) {
  if (node.left) 
    previousNode = walkTree(node.left, nodes, previousNode);

  if (previousNode && previousNode.value > node.value)
    if (!nodes.length) {
      nodes.push(previousNode);
      nodes.push(node);
    } else {
      nodes.pop();
      nodes.push(node);
    }
  previousNode = node;

  if (node.right) 
    previousNode = walkTree(node.right, nodes, previousNode);

  return previousNode;
}

const swapNodes = ([nodeOne, nodeTwo]) => {
  const temp = nodeOne.value;
  nodeOne.value = nodeTwo.value;
  nodeTwo.value = temp;
}

// Do not edit the line below.
exports.repairBst = repairBst;
