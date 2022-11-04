// https://leetcode.com/problems/add-two-numbers/

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

const addTwoNumbers = (num1, num2) => {
  const result = new ListNode();
  let curr = result;
  let carry = 0;

  while(num1 || num2) {
    if (!num1) num1 = new ListNode();
    if (!num2) num2 = new ListNode();

    let val = num1.val + num2.val + carry;

    if (val > 9) {
      carry = 1;
      val -= 10;
    } else {
      carry = 0;
    }

    curr.next = new ListNode(val);

    curr = curr.next;
    num1 = num1.next;
    num2 = num2.next;
  }

  if (carry)
    curr.next = new ListNode(1);

  return result.next;
};

const toLinkedList = arr => {
  const list = new ListNode();
  let curr = list;

  for (let num of arr) {
    curr.next = new ListNode(num);
    curr = curr.next;
  }

  return list.next;
};

let num1 = toLinkedList([ 2, 4, 3 ]), num2 = toLinkedList([ 5, 6, 4 ]);
console.log(addTwoNumbers(num1, num2), [ 7, 0, 8 ]);

num1 = toLinkedList([ 0 ]), num2 = toLinkedList([ 0 ]);
console.log(addTwoNumbers(num1, num2), [ 0 ]);

num1 = toLinkedList([ 9, 9, 9, 9, 9, 9, 9 ]),  num2 = toLinkedList([ 9, 9, 9, 9 ]);
console.log(JSON.stringify(addTwoNumbers(num1, num2)), [ 8, 9, 9, 9, 0, 0, 0, 1 ]);
