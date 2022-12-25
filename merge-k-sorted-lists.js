/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.
 */

import { ListNode, linkedList, equals } from './utils/linked-list.js';

const mergeKLists = lists  => {
  const dummy = new ListNode();
  let currentNode = dummy;

  while (lists.some(list => list)) {
    let minIndex;
    let minVal;

    for (let index = 0; index < lists.length; index++) {
      const list = lists[index];
      if (list === null) continue;
      if (minVal !== undefined && list?.val >= minVal) continue;

      minVal = list.val
      minIndex = index;
    }

    if (!minVal && minVal !== 0) return;

    const minList = lists[minIndex];
    currentNode.next = new ListNode(minList.val);
    currentNode = currentNode.next;
    lists[minIndex] = minList.next;
  };

  return dummy.next;
}

let expected, actual, lists;

lists = [
  linkedList([1, 2, 3]),
  linkedList([2, 4, 6])
];
expected = linkedList([1, 2, 2, 3, 4, 6]);
actual = mergeKLists(lists);
console.assert(equals(expected, actual), '%o', { lists, expected, actual });

lists = [
  linkedList([1, 2, 3]),
  linkedList([2, 4, 6, 8]),
  linkedList([3, 5, 7, 9])
];
expected = linkedList([1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9]);
actual = mergeKLists(lists);
console.assert(equals(expected, actual), '%o', { lists, expected, actual });
