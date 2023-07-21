// https://www.algoexpert.io/questions/remove-kth-node-from-end
// time: O(n)
// space: O(1)

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  const dummy = { next: head };

  let start = end = dummy;
  while (k-- >= 0) end = end.next;
  while (end.next) {
    start = start.next;
    end = end.next;
  }

  if (start === dummy) {
    head.value = head.next.value;
    head.next = head.next.next;
  } else {
    start.next = start.next.next;
  }
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
