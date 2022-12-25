/*
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
*/

import { linkedList, equals, ListNode } from './utils/linked-list.js';

const swapPairs = head => {
  const dummy = new ListNode();
  dummy.next = head;

  let start = dummy;
  let thisNode = head;
  let nextNode = head?.next;
  let end = nextNode?.next;

  while (thisNode && nextNode) {
    swapNodes(start, thisNode, nextNode, end);

    start = thisNode;
    thisNode = end;
    nextNode = thisNode?.next;
    end = nextNode?.next;
  }

  return dummy.next;
}

const swapNodes = (start, thisNode, nextNode, end) => {
  start.next = nextNode;
  nextNode.next = thisNode;
  thisNode.next = end;
}

let expected, actual, list;

list = linkedList([]);
expected = linkedList([]);
actual = swapPairs(list);
console.assert(equals(expected, actual), '%o', { list, expected, actual });

list = linkedList([1]);
expected = linkedList([1]);
actual = swapPairs(list);
console.assert(equals(expected, actual), '%o', { list, expected, actual });

list = linkedList([1, 2]);
expected = linkedList([2, 1]);
actual = swapPairs(list);
console.assert(equals(expected, actual), '%o', { list, expected, actual });

list = linkedList([1, 2, 3, 4, 5]);
expected = linkedList([2, 1, 4, 3, 5]);
actual = swapPairs(list);
console.assert(equals(expected, actual), '%o', { list, expected, actual });

list = linkedList([1, 2, 3, 4, 5, 6]);
expected = linkedList([2, 1, 4, 3, 6, 5]);
actual = swapPairs(list);
console.assert(equals(expected, actual), '%o', { list, expected, actual });
