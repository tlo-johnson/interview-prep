// https://leetcode.com/problems/merge-two-sorted-lists/?envType=study-plan&id=data-structure-i

const mergeTwoLists = (list1, list2) => {
  if (!list1) return list2;
  if (!list2) return list1;

  let previous;
  let result = list1;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      previous = list1;
      list1 = list1.next;
    } else {
      temp = list2.next;
      previous ? previous.next = list2 : result = list2;
      list2.next = list1;

      previous = list2;
      list2 = temp;
    }
  }
  
  if (list2) previous.next = list2;

  return result;
};

const mergeTwoLists2 = (list1, list2) => {
};

const toLinkedList = (accumulator, current) => {
  const node = { val: current, next: null };
  if (!accumulator) return node;

  const head = accumulator;
  while (accumulator.next) accumulator = accumulator.next;
  accumulator.next = node;

  return head;
};

/*
let arr = [1, 2, 4];
let list1 = arr.reduce(toLinkedList, null);
arr = [1, 3, 4];
let list2 = arr.reduce(toLinkedList, null);
console.log(JSON.stringify(mergeTwoLists(list1, list2)));
*/

arr = [2];
list1 = arr.reduce(toLinkedList, null);
arr = [1];
list2 = arr.reduce(toLinkedList, null);
console.log(JSON.stringify(mergeTwoLists(list1, list2)));
