// https://www.algoexpert.io/questions/merging-linked-lists
// time: O(n + m)
// space: O(1)

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let countOne = countTwo = 0;

  let node = linkedListOne;
  while (node) {
    countOne++;
    node = node.next;
  }

  node = linkedListTwo;
  while (node) {
    countTwo++;
    node = node.next;
  }

  while (countOne < countTwo) {
    linkedListTwo = linkedListTwo.next;
    countOne++;
  }
  while (countTwo < countOne) {
    linkedListOne = linkedListOne.next;
    countTwo++;
  }

  while (linkedListOne && linkedListTwo) {
    if (linkedListOne === linkedListTwo) return linkedListOne;

    linkedListOne = linkedListOne.next;
    linkedListTwo = linkedListTwo.next;
  }

  return null;
}

// Do not edit the line below.
exports.mergingLinkedLists = mergingLinkedLists;
