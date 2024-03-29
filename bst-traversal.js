// https://www.algoexpert.io/questions/bst-traversal

// time: O(n)
// space: O(log n) avg, O(n) worst
function inOrderTraverse(tree, array) {
  if (!tree) return;

  if (tree.left) inOrderTraverse(tree.left, array);
  array.push(tree.value);
  if (tree.right) inOrderTraverse(tree.right, array);

  return array;
}

// time: O(n)
// space: O(log n) avg, O(n) worst
function preOrderTraverse(tree, array) {
  if (!tree) return;

  array.push(tree.value);
  if (tree.left) preOrderTraverse(tree.left, array);
  if (tree.right) preOrderTraverse(tree.right, array);

  return array;
}

// time: O(n)
// space: O(log n) avg, O(n) worst
function postOrderTraverse(tree, array) {
  if (!tree) return;

  if (tree.left) postOrderTraverse(tree.left, array);
  if (tree.right) postOrderTraverse(tree.right, array);
  array.push(tree.value);

  return array;
}

// Do not edit the lines below.
exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;
