// https://leetcode.com/problems/minimum-path-sum/

const minPathSum = grid => {
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (row === 0 && column === 0) continue;
      const left = (grid[row][column - 1] === undefined) ? Infinity : grid[row][column - 1];
      const up = (grid[row - 1]?.[column] === undefined) ? Infinity : grid[row - 1][column];
      grid[row][column] += (left < up) ? left : up;
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
}
