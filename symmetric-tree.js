// https://leetcode.com/problems/symmetric-tree/

const isSymmetric = root => areSymmetric(root.left, root.right);

const areSymmetric_recursive = (leftNode, rightNode) => {
  if (!leftNode && !rightNode)
    return true;

  if (!leftNode || !rightNode)
    return false;

  return leftNode.val === rightNode.val &&
    areSymmetric(leftNode.left, rightNode.right) &&
    areSymmetric(leftNode.right, rightNode.left);
}

const areSymmetric = (left, right) => {
  const queue = [[left, right]];

  while (queue.length) {
    const [leftNode, rightNode] = queue.shift();

    if (!leftNode && !rightNode)
      continue;

    if (!leftNode || !rightNode || leftNode.val !== rightNode.val)
      return false;

    queue.push([leftNode.left, rightNode.right]);
    queue.push([leftNode.right, rightNode.left]);
  }

  return true;
}
