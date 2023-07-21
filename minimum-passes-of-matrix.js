// https://www.algoexpert.io/questions/minimum-passes-of-matrix
// time: O(wh) where w is width and h is height
// space: O(wh)

function minimumPassesOfMatrix(matrix) {
  let numPasses = 0;

  const queue = [];
  for (let row = 0; row < matrix.length; row++)
    for (let col = 0; col < matrix[row].length; col++)
      if (matrix[row][col] > 0) queue.push({coords: {row, col}, passes: numPasses});

  while (queue.length) {
    let { coords, passes } = queue.shift();
    const { row, col } = coords;

    numPasses = Math.max(numPasses, passes++);

    convert(matrix, row - 1, col, queue, passes);
    convert(matrix, row + 1, col, queue, passes);
    convert(matrix, row, col - 1, queue, passes);
    convert(matrix, row, col + 1, queue, passes);
  }

  for (let row = 0; row < matrix.length; row++)
    for (let col = 0; col < matrix[row].length; col++)
      if (matrix[row][col] < 0) return -1;

  return numPasses;
}

const convert = (matrix, row, col, queue, passes) => {
    if (!matrix[row]?.[col] || matrix[row]?.[col] >= 0) return;
    
    matrix[row][col] *= -1;
    queue.push({ coords: { row, col }, passes });
}

// Do not edit the line below.
exports.minimumPassesOfMatrix = minimumPassesOfMatrix;
