// https://leetcode.com/problems/rotate-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const rotateRight = (head, numRotations) => {
  let node = head;
  let count = 1;
  while (node.next !== null) {
    count++;
    node = node.next;
  }

  numRotations %= count;
  if (numRotations === 0) return head;

  let oldTail = head, newTail = head;
  for (count = 0; count < numRotations; count++)
    oldTail = oldTail.next;

  while (oldTail.next !== null) {
    oldTail = oldTail.next;
    newTail = newTail.next;
  }

  oldTail.next = head;
  head = newTail.next;
  newTail.next = null;

  return head;
}

// old tail -> head
// head -> new tail .next
// new tail -> null
