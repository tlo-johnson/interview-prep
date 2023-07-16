// https://www.algoexpert.io/questions/youngest-common-ancestor
// time: O(h) where h is height of the tree
// space: O(h). Note: this can be solved using constant space

// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const pathOne = getPath(descendantOne);
  const pathTwo = getPath(descendantTwo);

  const set = new Set(pathOne.map(n => n.name));
  return pathTwo.find(node => set.has(node.name));
}

const getPath = (node) => {
  const path = [];
  while (node !== null) {
    path.push(node);
    node = node.ancestor;
  }
  return path;
}

// Do not edit the lines below.
exports.AncestralTree = AncestralTree;
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;
