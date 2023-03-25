// https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/

const minReorder = (numCities, connections) => {
  const { path, neighbours } = traverse(connections);
  return numReorders(path, neighbours);
}

const traverse = connections => {
  const path = new Set();
  const neighbours = {};

  for (let [start, end] of connections) {
    if (end === 0)
      path.add(start);

    neighbours[start] ||= [];
    neighbours[start].push(end);

    neighbours[end] ||= [];
    neighbours[end].push(start);
  }

  return { path, neighbours };
}

const numReorders = (path, neighbours) => {
  let reorders = 0;
  const visited = new Set();
  const stack = [0];

  while (stack.length) {
    const city = stack.pop();

    if (visited.has(city))
      continue;
    visited.add(city);
    stack.push(...neighbours[city]);

    if (!path.has(city)) {
      reorders++;
      path.add(city);
    }
  }

  return reorders;
}
