/*
https://leetcode.com/problems/remove-nth-node-from-end-of-list/

Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

import { linkedList } from './linked-list.js';

const removeNthFromEnd = (head, count) => {
  let start = head;
  let end = head;
  while (count-- > 0) end = end.next;

  if (!end) return start.next;

  while (end.next) {
    end = end.next;
    start = start.next;
  }

  start.next = start.next.next;
  return head;
}

let head, count, output, expected;

head = linkedList([1]);
count = 1;
output = removeNthFromEnd(head, count);
expected = linkedList([]);
console.assert(expected.equals(output), '%o', { head, count, output, expected })

head = linkedList([1, 2, 3]);
count = 1;
output = removeNthFromEnd(head, count);
expected = linkedList([1, 2]);
console.assert(expected.equals(output), '%o', { head, count, output, expected })

head = linkedList([1, 2, 3]);
count = 2;
output = removeNthFromEnd(head, count);
expected = linkedList([1, 3]);
console.assert(expected.equals(output), '%o', { head, count, output, expected })

head = linkedList([1, 2, 3]);
count = 3;
output = removeNthFromEnd(head, count);
expected = linkedList([2, 3]);
console.assert(expected.equals(output), '%o', { head, count, output, expected })
