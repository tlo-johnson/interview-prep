// https://leetcode.com/problems/unique-paths/

const uniquePathsWithObstacles = grid => {
  if (grid[0][0] === 1) return 0;

  const numRows = grid.length;
  const numColumns = grid[0].length;

  for (let row = 0; row < numRows; row++) {
    for (let column = 0; column < numColumns; column++) {
      if (grid[row][column] === 1)
        grid[row][column] = -1;
      else if (row === 0 && column === 0)
        grid[row][column] = 1;
      else if (row === 0)
        grid[row][column] = grid[row][column - 1];
      else if (column === 0)
        grid[row][column] = grid[row - 1][column];
      else {
        if (grid[row - 1][column] === -1 && grid[row][column - 1] === -1)
          grid[row][column] = -1;
        else if (grid[row - 1][column] === -1)
          grid[row][column] = grid[row][column - 1];
        else if (grid[row][column - 1] === -1)
          grid[row][column] = grid[row - 1][column];
        else
          grid[row][column] = grid[row - 1][column] + grid[row][column - 1];
      }
    }
  }
  return grid[numRows - 1][numColumns - 1] === -1 ? 0 : grid[numRows - 1][numColumns - 1];
}
