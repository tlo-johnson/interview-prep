// https://www.algoexpert.io/questions/river-sizes
// time: O(wh) where w is the width and h is the height of matrix
// space: O(wh) to store the sizes array

function riverSizes(matrix) {
  const sizes = [];
  for (let row = 0; row < matrix.length; row++)
    for (let col = 0; col < matrix[0].length; col++)
      if (matrix[row][col] === 1)
        sizes.push(getSize(matrix, row, col));

  return sizes;
}

const getSize = (matrix, row, col) => {
  if (matrix[row]?.[col] !== 1) return 0;

  matrix[row][col] = 0;
  return 1 +
    getSize(matrix, row - 1, col) +
    getSize(matrix, row + 1, col) +
    getSize(matrix, row, col - 1) +
    getSize(matrix, row, col + 1);
}

// Do not edit the line below.
exports.riverSizes = riverSizes;
