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

const getSize = (matrix, startRow, startCol) => {
  const queue = [{ row: startRow, col: startCol }];
  let size = 0;
  while (queue.length) {
    const { row, col } = queue.pop()
    if (matrix[row]?.[col] !== 1) continue;

    size++;
    matrix[row][col] = 0;
    queue.push(
      { row: row - 1, col },
      { row: row + 1, col },
      { row, col: col - 1 },
      { row, col: col + 1 }
    )
  }

  return size;
}

// Do not edit the line below.
exports.riverSizes = riverSizes;
