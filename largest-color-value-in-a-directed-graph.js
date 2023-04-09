// https://leetcode.com/problems/largest-color-value-in-a-directed-graph/

const largestPathValue = (colors, edges) => {
  const adjacencyList = createAdjacencyList(edges);
  return largestColorValue(colors, adjacencyList);
}

const createAdjacencyList = (edges) => {
  const adjacencyList = {};

  for (let [start, end] of edges) {
    adjacencyList[start] ||= [];
    adjacencyList[start].push(end);
  }

  return adjacencyList;
}

const largestColorValue = (colors, adjacencyList) => {
  const explored = new Set();
  let result = 0;

  for (let node = 0; node < colors.length; node++) {
    const stack = [{ node, parents: new Set(), numColors: {}}];

    while (stack.length) {
      const { node, parents, numColors } = stack.pop();
      if (parents.has(node)) {
        return -1;
      }
      parents.add(node);

      if (explored.has(node)) {
        continue;
      }
      explored.add(node);

      const color = colors[node];
      numColors[color] ||= 0;
      numColors[color]++;

      const neighbours = adjacencyList[node];
      if (neighbours) {
        neighbours.forEach(n => stack.push({ node: n, parents: new Set(parents), numColors: { ...numColors } }));
      }

      const max = Object.keys(numColors).reduce((maxValue, currentColor) => Math.max(maxValue, numColors[currentColor]), 0);
      result = Math.max(result, max);
    }
  }

  return result;
}
