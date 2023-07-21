// https://www.algoexpert.io/questions/cycle-in-graph
// time: O(v + e)
// space: O(v)

function cycleInGraph(edges) {
  const visited = new Set();

  for (let node = 0; node < edges.length; node++) {
    if (visited.has(node)) continue;
    if (hasCycle(edges, node, visited)) return true;
  }

  return false;
}

const hasCycle = (edges, node, visited, callStack = new Set()) => {
  if (visited.has(node)) return false;
  if (callStack.has(node)) return true;

  callStack.add(node);
  for (let child of edges[node])
    if (hasCycle(edges, child, visited, callStack)) return true;

  callStack.delete(node);
  visited.add(node);

  return false;
}

// Do not edit the line below.
exports.cycleInGraph = cycleInGraph;
