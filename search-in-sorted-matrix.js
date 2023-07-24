// https://www.algoexpert.io/questions/search-in-sorted-matrix
// time: O(log w + log h) where w is width and h is height of matrix
// space: O(1)

function searchInSortedMatrix(matrix, target) {
  const row = columnBinarySearch(matrix, target);
  if (row === -1) return [-1, -1];

  const column = rowBinarySearch(matrix, target, row);
  return [row, column];
}

const columnBinarySearch = (matrix, target) => {
  let start = 0, end = matrix.length - 1;
  const column = 0;

  if (target < matrix[start][column]) return -1;

  while (start <= end) {
    const row = Math.floor((start + end) / 2);
    const value = matrix[row][column];
    if (value === target) return row;
    target > value ? start = row + 1 : end = row - 1;
  }

  return end;
}

const rowBinarySearch = (matrix, target, row) => {
  let start = 0, end = matrix[row].length - 1;
  while (start <= end) {
    const column = Math.floor((start + end) / 2);
    const value = matrix[row][column];
    
    if (value === target) return column;
    target > value ? start = column + 1 : end = column - 1;
  }

  return -1;
}

// Do not edit the line below.
exports.searchInSortedMatrix = searchInSortedMatrix;
