// https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/

const maxProduct = root => {
  calculateSums(root);
  const totalSum = root.val + root.leftSum + root.rightSum;
  const maxProduct = maximizeSubtrees(root, totalSum);
  return maxProduct % (Math.pow(10, 9) + 7);
}

const calculateSums = node => {
  if (!node) return { val: 0, leftSum: 0, rightSum: 0 };

  calculateSums(node.left);
  const leftSum = node.left.val + node.left.leftSum + node.left.rightSum;

  calculateSums(node.right);
  const rightSum = node.right.val + node.right.leftSum + node.right.rightSum;

  node.val = { val: node.val, leftSum, rightSum };
}

const maximizeSubtrees = (node, totalSum, maxProduct = 0n) => {
  if (!node.left && !node.right) return maxProduct;

  if (node.left) {
    const product = BigInt(totalSum - node.val.leftSum) * BigInt(node.val.leftSum);
    if (product > maxProduct)
      maxProduct = product;
  }

  if (node.right) {
    const product = BigInt(totalSum - node.val.rightSum) * BigInt(node.val.rightSum);
    if (product > maxProduct)
      maxProduct = product;
  }

  maxProduct = maximizeSubtrees(node.left, totalSum, maxProduct);
  maxProduct = maximizeSubtrees(node.right, totalSum, maxProduct);
  return maxProduct;
}
