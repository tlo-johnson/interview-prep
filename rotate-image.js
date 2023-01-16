// https://leetcode.com/problems/rotate-image/

import { areEquivalent } from './utils/array.js';
const rotate = (matrix, iteration = 0) => {
  /*
   * top left => top right => bottom right => bottom left
   * top left + 1 => top right + 1 => bottom right - 1 => bottom left - 1
   * top left + i  => top right + i  => bottom right - i  => bottom left - i 
   */

  const topRow = iteration;
  const bottomRow = matrix.length - 1 - iteration;
  const leftColumn = iteration;
  const rightColumn = matrix.length - 1 - iteration;

  let temp;
  for (let index = leftColumn; index < rightColumn; index++) {
    temp = matrix[topRow + index][rightColumn];
    matrix[topRow + index][rightColumn] = matrix[topRow][leftColumn + index];
    matrix[topRow][leftColumn + index] = temp;

    temp = matrix[bottomRow][rightColumn - index];
    matrix[bottomRow][rightColumn - index] = matrix[topRow][leftColumn + index];
    matrix[topRow][leftColumn + index] = temp;

    temp = matrix[bottomRow - index][leftColumn];
    matrix[bottomRow - index][leftColumn] = matrix[topRow][leftColumn + index];
    matrix[topRow][leftColumn + index] = temp;
  }

  if (rightColumn >= leftColumn) {
    rotate(matrix, iteration + 1);
  }
}

let matrix, expected;

// matrix = [[1,2,3],[4,5,6],[7,8,9]];
// expected = [[7,4,1],[8,5,2],[9,6,3]];
// rotate(matrix);
// console.assert(areEquivalent(expected, matrix), '%o', { matrix, expected });
//
// matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
// expected = [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]];
// rotate(matrix);
// console.assert(areEquivalent(expected, matrix), '%o', { matrix, expected });

matrix = [[2,29,20,26,16,28],[12,27,9,25,13,21],[32,33,32,2,28,14],[13,14,32,27,22,26],[33,1,20,7,21,7],[4,24,1,6,32,34]];
expected = [[4,33,13,32,12,2],[24,1,14,33,27,29],[1,20,32,32,9,20],[6,7,27,2,25,26],[32,21,22,28,13,16],[34,7,26,14,21,28]];
rotate(matrix);
console.assert(areEquivalent(expected, matrix), '%o', { matrix, expected });
