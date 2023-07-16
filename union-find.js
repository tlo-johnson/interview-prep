// https://www.algoexpert.io/questions/union-find

// Do not edit the class below except for
// the constructor and the createSet, find,
// and union methods. Feel free to add new
// properties and methods to the class.
class UnionFind {
  // space: O(n)
  constructor() {
    this.data = {};
  }

  // time: O(1)
  // space: O(1)
  createSet(value) {
    this.data[value] = value;
  }

  // time: O(1)
  // space: O(1)
  find(value) {
    return this.data[`${value}`] ?? null;
  }

  // time: O(n)
  // space: O(1)
  union(valueOne, valueTwo) {
    const setOne = this.find(valueOne)
    const setTwo = this.find(valueTwo);
    if (!Number.isInteger(setOne) || !Number.isInteger(setTwo)) return;

    Object.entries(this.data)
      .filter(([_, value]) => value === setTwo)
      .forEach(([key]) => this.data[key] = setOne);
  }
}

// Do not edit the line below.
exports.UnionFind = UnionFind;
