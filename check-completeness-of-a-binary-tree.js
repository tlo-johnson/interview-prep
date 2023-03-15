// https://leetcode.com/problems/check-completeness-of-a-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const isCompleteTree = root => {
  let nullFound = false;
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    if (nullFound && node)
      return false;

    if (!node) {
        nullFound = true;
        continue;
    }

    queue.push(node.left);
    queue.push(node.right);
  }

  return true;
}
