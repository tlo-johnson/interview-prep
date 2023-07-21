// https://www.algoexpert.io/questions/two-colorable
// time: O(v+e)
// space: O(v)

function twoColorable(edges) {
  const visited = new Set();

  for (let node = 0; node < edges.length; node++) {
    if (visited.has(node)) continue;
    if (!isBipartite(edges, node, visited)) return false;
  }

  return true;
}

const isBipartite = (edges, start, visited) => {
  const white = new Set([start]);
  const black = new Set();
  const queue = [{ node: start, color: 'white' }];

  while (queue.length) {
    const { node, color } = queue.pop();
    if (color === 'white') {
      if (black.has(node)) return false;
      if (visited.has(node)) continue;
      if (!white.has(node)) white.add(node);
      edges[node].forEach(child => queue.push({ node: child, color: 'black' }));
      visited.add(node);
      continue;
    }

    if (color === 'black') {
      if (white.has(node)) return false;
      if (visited.has(node)) continue;
      if (!black.has(node)) black.add(node);
      edges[node].forEach(child => queue.push({ node: child, color: 'white' }));
      visited.add(node);
    }
  }

  return true;
}

// Do not edit the line below.
exports.twoColorable = twoColorable;
