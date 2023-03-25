// https://leetcode.com/problems/number-of-operations-to-make-network-connected/

const makeConnected = (numComputers, connections) => {
  if (connections.length < numComputers - 1)
    return -1;

  const graph = walk(connections);

  let numNetworks = 0;
  const visited = new Set();

  for (let computer = 0; computer < numComputers; computer++) {
    if (visited.has(computer))
      continue;

    numNetworks++;
    visit(graph, computer, visited);
  }

  return --numNetworks;
}

const walk = connections => {
  const graph = {};

  for (let [start, end] of connections) {
    graph[start] ||= [];
    graph[start].push(end);

    graph[end] ||= [];
    graph[end].push(start);
  }

  return graph;
}

const visit = (graph, computer, visited) => {
  const stack = [computer];
  while(stack.length) {
    const node = stack.pop();
    if (visited.has(node))
      continue;

    visited.add(node);

    if (!graph[node])
      continue;

    stack.push(...graph[node]);
  }

  return visited;
}

let numComputers = 6;
let connections = [[0,1],[0,2],[0,3],[1,2],[1,3]];
let expected = 2;
let actual = makeConnected(numComputers, connections);
console.assert(expected === actual, '%o', { numComputers, connections, expected, actual });
