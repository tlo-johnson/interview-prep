// https://www.algoexpert.io/questions/sum-of-linked-lists
// time: O(n) where n is the longer of the two linked lists
// space: O(n)

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  const dummy = new LinkedList();

  let carry = 0, node = dummy;
  while (linkedListOne || linkedListTwo) {
    const sum = (linkedListOne?.value || 0) + (linkedListTwo?.value || 0) + carry;
    const digit = sum > 9 ? sum - 10 : sum;
    carry = sum > 9 ? 1 : 0;

    node.next = new LinkedList(digit);
    node = node.next;

    linkedListOne = linkedListOne?.next;
    linkedListTwo = linkedListTwo?.next;
  }

  if (carry) node.next = new LinkedList(1);

  return dummy.next;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
