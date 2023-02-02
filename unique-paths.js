// https://leetcode.com/problems/unique-paths/

const uniquePaths = (numRows, numColumns) => {
  const grid = [];
  for (let row = 0; row < numRows; row++) {
    for (let column = 0; column < numColumns; column++) {
      grid[row] ||= [];
      if (row === 0 && column === 0)
        grid[row][column] = 1;
      else if (row === 0)
        grid[row][column] = grid[row][column - 1];
      else if (column === 0)
        grid[row][column] = grid[row - 1][column];
      else
        grid[row][column] = grid[row - 1][column] + grid[row][column - 1];
    }
  }
  return grid[numRows - 1][numColumns - 1];
}
