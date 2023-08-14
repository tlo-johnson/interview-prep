// https://www.algoexpert.io/questions/maximum-sum-submatrix
// time: O(nm * size^2) where n is number of rows of matrix, m is number of columns of matrix
// space: O(1)

function maximumSumSubmatrix(matrix, size) {
  let maxSum = -Infinity;

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
      const sum = calcSum(matrix, size, rowIndex, colIndex);
      maxSum = Math.max(sum, maxSum);
    }
  }

  return maxSum;
}

const calcSum = (matrix, size, rowIndex, colIndex) => {
  let sum = 0;

  for (let i = 0; i < size; i++)
    for (let j = 0; j < size; j++)
      sum += matrix[rowIndex + i]?.[colIndex + j] ?? -Infinity;

  return sum;
}

// Do not edit the line below.
exports.maximumSumSubmatrix = maximumSumSubmatrix;
