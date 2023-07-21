// https://www.algoexpert.io/questions/min-heap-construction

// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
    this.buildHeap(array);
  }

  // time: O(n log n). can be reduced to O(n) time by sifting down not up (which insert does)
  // proof for O(n) is somewhat mathematical but untuitively there are less sift down operations than sift up
  // space: O(n)
  buildHeap(array) {
    this.heap = [];
    array.forEach(element => this.insert(element));
  }

  // time: O(log n)
  // space: O(1)
  siftDown() {
    if (this.heap.length <= 1) return;

    let index = 0;

    while (this.heap[index] > this.left(index) || this.heap[index] > this.right(index)) {
      const minIndex = this.left(index) < this.right(index) ? this.leftIndex(index) : this.rightIndex(index);
      this.swap(index, minIndex);
      index = minIndex;
    }
  }

  // time: O(log n)
  // space: O(1)
  siftUp() {
    let index = this.heap.length - 1;

    while (this.parent(index) && this.parent(index) > this.heap[index]) {
      const parentIndex = this.parentIndex(index);
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  // time: O(1)
  // space: O(1)
  peek() {
    return this.heap[0];
  }

  // time: O(log n)
  // space: O(1)
  remove() {
    if (this.heap.length === 0) return;

    const min = this.heap[0];
    this.swap(0, this.heap.length - 1);
    this.heap.pop();
    this.siftDown();

    return min;
  }

  // time: O(log n)
  // space: O(1)
  insert(value) {
    this.heap.push(value);
    this.siftUp();
  }

  leftIndex(index) {
    return 2 * index + 1;
  }

  left(index) {
    const leftIndex = this.leftIndex(index);
    const node = this.heap[leftIndex];
    return (node === null || node === undefined) ? Infinity : node;
  }

  rightIndex(index) {
    return 2 * index + 2;
  }

  right(index) {
    const rightIndex = this.rightIndex(index);
    const node = this.heap[rightIndex];
    return (node === null || node === undefined) ? Infinity : node;
  }

  parent(index) {
    const parentIndex = this.parentIndex(index);
    return parentIndex < 0 ? null : this.heap[parentIndex];
  }

  parentIndex(index) {
    return index % 2 === 0 ? (index - 2) / 2 : (index - 1) / 2;
  }

  swap(startIndex, endIndex) {
    const temp = this.heap[startIndex];
    this.heap[startIndex] = this.heap[endIndex];
    this.heap[endIndex] = temp;
  }
}

// Do not edit the line below.
exports.MinHeap = MinHeap;
