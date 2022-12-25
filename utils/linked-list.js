import util from 'util';

export const linkedList = arr => {
  if (!arr.length) return new ListNode();

  const nodes = arr.reduce(toLinkedList, new ListNode());
  return nodes.next;
}

export const equals = (thisList, thatList) => thisList.equals(thatList);

const toLinkedList = (accumulator, current) => {
  const head = accumulator;
  while (accumulator.next) accumulator = accumulator.next;
  accumulator.next = new ListNode(current);

  return head;
};

export class ListNode {
  constructor (val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  [util.inspect.custom] = () => {
    const output = [];

    let node = this;
    while(node) {
      output.push(node.val);
      node = node.next;
    }

    return output;
  }

  equals = list => {
    if (list === null) list = new ListNode();
    return JSON.stringify(this) === JSON.stringify(list);
  }
}
