// https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/

const minScore = (n, roads) => {
  const graph = walk(roads);
  return minDistance(graph);
}

const walk = roads => {
  const graph = {};
  for (let [startCity, endCity, distance] of roads) {
    graph[startCity] ||= [];
    graph[startCity].push({ city: endCity, distance });

    graph[endCity] ||= [];
    graph[endCity].push({ city: startCity, distance });
  }

  return graph;
}

const minDistance = graph => {
  let result;
  const visited = new Set();

  const stack = [1];
  while (stack.length) {
    const city = stack.pop();
    const roads = graph[city];
    if (!roads)
      continue;

    for (let { city: connectedCity, distance } of roads) {
      if (!result || distance < result)
        result = distance;

      if (!visited.has(connectedCity)) {
        visited.add(connectedCity);
        stack.push(connectedCity);
      }
    }
  }

  return result;
}

let n = 14;
let roads = [[2,9,2308],[2,5,2150],[12,3,4944],[13,5,5462],[2,10,2187],[2,12,8132],[2,13,3666],[4,14,3019],[2,4,6759],[2,14,9869],[1,10,8147],[3,4,7971],[9,13,8026],[5,12,9982],[10,9,6459]];
console.log(minScore(6, roads));
