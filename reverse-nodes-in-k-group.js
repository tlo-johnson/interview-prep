/*
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.
*/

import { equals, linkedList, ListNode } from './utils/linked-list.js';

const reverseKGroup = (head, count) => {
  const dummy = new ListNode(null, head);
  let curr = dummy;

  while(hasEnoughNodes(curr, count)) {
    curr = swapNodes(curr, count);
  }

  return dummy.next;
}

const hasEnoughNodes = (node, count) => {
  while (count-- > 0) {
    node = node.next;
    if (!node) return false;
  }

  return true;
}

const swapNodes = (node, count) => {
  const start = node;
  node = node.next;

  const newEnd = node;

  let prev = node;
  let curr = node.next;
  let next = curr?.next;

  while (count-- > 1) { // when count is 1 we actually don't want to swap any nodes
    curr.next = prev;
    prev = curr;
    curr = next;
    next = next?.next;
  }

  start.next = prev;
  newEnd.next = curr;

  return newEnd;
}

let expected, actual, head, count;

head = linkedList([1, 2, 3, 4, 5, 6, 7]);
count = 1;
expected = linkedList([1, 2, 3, 4, 5, 6, 7]);
actual = reverseKGroup(head, count);
console.assert(equals(expected, actual), '%o', { head, count, expected, actual });

head = linkedList([1, 2, 3, 4, 5, 6, 7]);
count = 2;
expected = linkedList([2, 1, 4, 3, 6, 5, 7]);
actual = reverseKGroup(head, count);
console.assert(equals(expected, actual), '%o', { head, count, expected, actual });

head = linkedList([1, 2, 3, 4, 5, 6, 7]);
count = 3;
expected = linkedList([3, 2, 1, 6, 5, 4, 7]);
actual = reverseKGroup(head, count);
console.assert(equals(expected, actual), '%o', { head, count, expected, actual });

head = linkedList([1, 2, 3, 4, 5, 6, 7, 8]);
count = 4;
expected = linkedList([4, 3, 2, 1, 8, 7, 6, 5]);
actual = reverseKGroup(head, count);
console.assert(equals(expected, actual), '%o', { head, count, expected, actual });
