// https://www.algoexpert.io/questions/breadth-first-search

// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // time: O(v + e)
  // space: O(v)
  breadthFirstSearch(array) {
    const queue = [this];
    let left = 0;
    while (left < queue.length) {
      const node = queue[left++];
      array.push(node.name);
      queue.push(...node.children);
    }

    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
