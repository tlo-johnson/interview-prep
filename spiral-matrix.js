import { areEquivalent } from './utils/array.js';

const spiralOrder = (matrix) => {
  const directions = {
    'right': { direction: 'down', indexer: (rowIndex, columnIndex) => [++rowIndex, columnIndex] },
    'down': { direction: 'left', indexer: (rowIndex, columnIndex) => [rowIndex, --columnIndex] },
    'left': { direction: 'up', indexer: (rowIndex, columnIndex) => [--rowIndex, columnIndex] },
    'up': { direction: 'right', indexer: (rowIndex, columnIndex) => [rowIndex, ++columnIndex] }
  };
  let rowIndex = 0, columnIndex = 0;
  let direction = 'right';
  let indexer = directions['up'].indexer;
  const output = [];

  while (true) {
    const value = matrix[rowIndex][columnIndex];
    output.push(value);
    matrix[rowIndex][columnIndex] = 'sentinel';
    
    const [nextRowIndex, nextColumnIndex] = indexer(rowIndex, columnIndex);
    if (invalidIndex(matrix, nextRowIndex, nextColumnIndex)) {
      const { direction: newDirection, indexer: newIndexer } = directions[direction];
      direction = newDirection;
      indexer = newIndexer;
      [rowIndex, columnIndex] = indexer(rowIndex, columnIndex);
      if (invalidIndex(matrix, rowIndex, columnIndex)) break;
    } else {
      [rowIndex, columnIndex] = [nextRowIndex, nextColumnIndex];
    }
  }

  return output;
}

const outOfBounds = (index, maxSize) => index === -1 || index === maxSize;

const invalidIndex = (matrix, rowIndex, columnIndex) =>
  outOfBounds(rowIndex, matrix.length) ||
  outOfBounds(columnIndex, matrix[0].length) ||
  matrix[rowIndex][columnIndex] === 'sentinel';

let matrix, expected, actual;

matrix = [[1]];
expected = [1];
actual = spiralOrder(matrix);
console.assert(areEquivalent(expected, actual), '%o', { matrix, expected, actual });

matrix = [[1], [1]];
expected = [1, 1];
actual = spiralOrder(matrix);
console.assert(areEquivalent(expected, actual), '%o', { matrix, expected, actual });

matrix = [[1, 1]];
expected = [1, 1];
actual = spiralOrder(matrix);
console.assert(areEquivalent(expected, actual), '%o', { matrix, expected, actual });

matrix = [[1, 2], [1, 2]];
expected = [1, 2, 2, 1];
actual = spiralOrder(matrix);
console.assert(areEquivalent(expected, actual), '%o', { matrix, expected, actual });

matrix = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
expected = [1, 2, 3, 3, 3, 2, 1, 1, 2];
actual = spiralOrder(matrix);
console.assert(areEquivalent(expected, actual), '%o', { matrix, expected, actual });
