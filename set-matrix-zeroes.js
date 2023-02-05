// https://leetcode.com/problems/set-matrix-zeroes/

const setZeroes = matrix => {
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      if (matrix[row][column] === 0) setPlaceholders(matrix, row, column);
    }
  }

  updatePlaceholders(matrix);
}

const setPlaceholders = (matrix, row, column) => {
  for (let index = 0; index < matrix.length; index++) {
    if (matrix[index][column] === 0)
      continue;
    matrix[index][column] = 'placeholder';
  }

  for (let index = 0; index < matrix[0].length; index++) {
    if (matrix[row][index] === 0)
      continue;
    matrix[row][index] = 'placeholder';
  }
}

const updatePlaceholders = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      if (matrix[row][column] === 'placeholder') matrix[row][column] = 0;
    }
  }
}
