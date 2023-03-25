// https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/

const countPairs = (numNodes, edges) => {
  const parents = Array(numNodes);
  for (let index = 0; index < numNodes; index++)
    parents[index] = index;

  for (let edge of edges)
    union(edge, parents);

  const componentCounts = countComponents(parents);
  return pairs(componentCounts, numNodes);
}

const union = (edge, parents) => {
  const [start, end] = edge;
  const startParent = parent(start, parents);
  const endParent = parent(end, parents);

  if (startParent === endParent) return;

  const smallerParent = Math.min(startParent, endParent);
  const largerParent = Math.max(startParent, endParent);
  parents[largerParent] = smallerParent;
}

const parent = (node, parents) => node === parents[node] ? node : parent(parents[node], parents);

const countComponents = (parents) => {
  const result = [];
  for (let node of parents) {
    const component = parent(node, parents);
    result[component] ||= 0;
    result[component]++;
  }
  return result;
}

const pairs = (componentCounts, numNodes) => {
  let numPairs = 0;

  for (let count of componentCounts) {
    if (!count) continue;
    numNodes -= count;
    numPairs += count * numNodes;
  }

  return numPairs;
}

let numNodes = 11;
let edges = [[5,0],[1,0],[10,7],[9,8],[7,2],[1,3],[0,2],[8,5],[4,6],[4,2]];
let expected = 0;
let actual = countPairs(numNodes, edges);
console.assert(expected === actual, '%o', { numNodes, edges, expected, actual });

numNodes = 100000;
edges = [];
expected = 4999950000;
console.time('performance');
actual = countPairs(numNodes, edges);
console.timeEnd('performance');
console.assert(expected === actual, '%o', { numNodes, edges, expected, actual });
