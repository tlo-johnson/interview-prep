// https://www.algoexpert.io/questions/number-of-ways-to-traverse-graph
// time: O(wh) where w is width and h is height
// space: O(wh)

function numberOfWaysToTraverseGraph(width, height) {
  const grid = [];

  for (let row = 0; row < height; row++) {
    grid[row] = [];

    for (let col = 0; col < width; col++) {
      if (row === 0 && col === 0) {
        grid[row][col] = 1;
        continue;
      }

      const fromTop = grid[row - 1] ? grid[row - 1][col] : 0;
      const fromLeft = grid[row][col - 1] ? grid[row][col - 1] : 0;
      grid[row][col] = fromTop + fromLeft;
    }
  }

  return grid[height - 1][width - 1];
}

// Do not edit the line below.
exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;

/*
  1   1   1   1   1
  1   2   3   4   5
  1   3   6   10  15
  1   4   10  20  35
*/
