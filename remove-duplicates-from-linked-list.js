// https://www.algoexpert.io/questions/remove-duplicates-from-linked-list
// time: O(n)
// space: O(1)

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(node) {
  if (!node) return node;
  const head = node;

  let next = node.next;
  while (next) {
    if (next.value === node.value) {
      next = next.next;
      continue;
    }

    node.next = next;
    node = next;
    next = node.next;
  }

  node.next = null;
  return head;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
