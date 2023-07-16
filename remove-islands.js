// https://www.algoexpert.io/questions/remove-islands
// time: O(wh) where w is width and h is height of matrix
// space: O(wh)

function removeIslands(matrix) {
  const visited = new Set();
  for (let row = 0; row < matrix.length; row++)
    for (let col = 0; col < matrix[0].length; col++) {
      const location = toLocation(row, col);

      if (visited.has(location)) continue;
      if (matrix[row][col] !== 1) {
        visited.add(location);
        continue;
      }

      const { region, isIsland } = exploreRegion(matrix, location, visited);
      if (isIsland)
        for (let [row, col] of region)
          matrix[row][col] = 0;
    }

  return matrix;
}

const exploreRegion = (matrix, startLocation, visited) => {
  let result = { isIsland: true, region: [] };
  const queue = [startLocation];

  while (queue.length) {
    const location = queue.pop();

    if (visited.has(location)) continue;
    visited.add(location);

    const [ row, col ] = toCoordinates(location);
    if (matrix[row]?.[col] !== 1) continue;

    if (row === matrix.length - 1 || row === 0 || col === matrix[0].length - 1 || col === 0)
      result.isIsland = false;

    result.region.push([row, col]);
    queue.push(toLocation(row - 1, col), toLocation(row + 1, col), toLocation(row, col - 1), toLocation(row, col + 1));
  }

  return result;
}

const toLocation = (row, col) => `${row}|${col}`;

const toCoordinates = location => location.split('|').map(Number);

// Do not edit the line below.
exports.removeIslands = removeIslands;
