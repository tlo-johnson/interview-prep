// https://leetcode.com/problems/number-of-closed-islands/

const land = 0;
const water = 1;

const closedIsland = (grid) => {
  let numIslands = 0;

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      if (row[columnIndex] !== land) {
        continue;
      }

      const { isIsland, islandCoords } = explore(grid, rowIndex, columnIndex);
      if (!isIsland) {
        continue;
      }

      blockOffIsland(grid, islandCoords);
      numIslands++;
    }
  }

  return numIslands;
}

const explore = (grid, rowIndex, columnIndex) => {
  const islandCoords = new Set();

  const queue = [[rowIndex, columnIndex]];
  while (queue.length) {
    const [rowIndex, columnIndex] = queue.shift();

    if (rowIndex < 0 || rowIndex === grid.length || columnIndex < 0 || columnIndex === grid[0].length) {
      return { isIsland: false, islandCoords };
    }


    if (grid[rowIndex][columnIndex] === water) {
      continue;
    }

    const key = `${rowIndex}|${columnIndex}`;
    if (islandCoords.has(key)) {
      continue;
    }
    islandCoords.add(key);

    queue.push([rowIndex + 1, columnIndex]);
    queue.push([rowIndex - 1, columnIndex]);
    queue.push([rowIndex, columnIndex - 1]);
    queue.push([rowIndex, columnIndex + 1]);
  }

  return { isIsland: true, islandCoords };
}

const blockOffIsland = (grid, islandCoords) => {
  for (let key of islandCoords) {
    const [rowIndex, columnIndex] = key.split('|');
    grid[rowIndex][columnIndex] = -1;
  }
}
