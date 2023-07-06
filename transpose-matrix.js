// https://www.algoexpert.io/questions/transpose-matrix
// time: O(w * h)
// space: O(w * h)

function transposeMatrix(matrix) {
  const result = [];

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < matrix[rowIndex].length; columnIndex++) {
      result[columnIndex] = result[columnIndex] || [];
      result[columnIndex].push(matrix[rowIndex][columnIndex]);
    }
  }

  return result;
}

// Do not edit the line below.
exports.transposeMatrix = transposeMatrix;
