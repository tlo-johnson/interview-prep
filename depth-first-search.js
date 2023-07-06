// https://www.algoexpert.io/questions/depth-first-search
// time: O(v + e)
// space: O(h)

// Do not edit the class below except
// for the depthFirstSearch method.
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

  depthFirstSearch(array) {
    array.push(this.name);
    this.children.forEach(c => c.depthFirstSearch(array));

    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
