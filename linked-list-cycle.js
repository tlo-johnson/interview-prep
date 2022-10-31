// https://leetcode.com/problems/linked-list-cycle/?envType=study-plan&id=data-structure-i

const hasCycle = curr => {
  while (curr) {
    if (curr.val === null) return true;
    curr.val = null;
    curr = curr.next;
  }

  return false;
}
