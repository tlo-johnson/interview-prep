// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

const buildTree = (inorder, postorder) => {
  if (!inorder.length)
    return null;

  const rootValue = postorder[postorder.length - 1];
  const rootIndex = inorder.indexOf(rootValue);

  const leftInOrder = inorder.slice(0, rootIndex);
  const rightInOrder = inorder.slice(rootIndex + 1);
  const leftPostOrder = postorder.slice(0, leftInOrder.length);
  const rightPostOrder = postorder.slice(leftInOrder.length, leftInOrder.length + rightInOrder.length);

  const leftNode = buildTree(leftInOrder, leftPostOrder);
  const rightNode = buildTree(rightInOrder, rightPostOrder);
  const root = new TreeNode(rootValue, leftNode, rightNode);

  return root;
}
