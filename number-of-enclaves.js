// https://leetcode.com/problems/number-of-enclaves/

const sea = 0;
const land = 1;

const numEnclaves = (grid) => {
  let result = 0;

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      const cell = row[columnIndex];
      if (cell !== land) {
        continue;
      }

      const { numCells, isIsland } = explore(grid, [rowIndex, columnIndex]);
      if (isIsland) {
        result += numCells;
      }
    }
  }

  return result;
}

const explore = (grid, startCoords) => {
  const stack = [startCoords];
  let isIsland = true, numCells = 0;

  while (stack.length) {
    const [ rowIndex, columnIndex ] = stack.pop();
    if (rowIndex < 0 || rowIndex === grid.length || columnIndex < 0 || columnIndex === grid[0].length) {
      isIsland = false;
      continue;
    }

    const cell = grid[rowIndex][columnIndex];
    if (cell === -1 || cell === sea) {
      continue;
    }
    grid[rowIndex][columnIndex] = -1;

    numCells++;
    stack.push([rowIndex + 1, columnIndex]);
    stack.push([rowIndex - 1, columnIndex]);
    stack.push([rowIndex, columnIndex + 1]);
    stack.push([rowIndex, columnIndex - 1]);
  }

  return { isIsland, numCells };
}
