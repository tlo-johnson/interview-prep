// https://www.algoexpert.io/questions/node-depths
// time: O(n)
// space: O(n)

const nodeDepths = root => {
  if (!root) return 0;

  let sum = index = 0;
  const queue = [[root, 0]];
  while (index < queue.length) {
    const [node, depth] = queue[index++];
    sum += depth;

    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }

  return sum;
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
exports.nodeDepths = nodeDepths;
