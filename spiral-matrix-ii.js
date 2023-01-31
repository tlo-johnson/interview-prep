// https://leetcode.com/problems/spiral-matrix-ii/

import { areEquivalent } from './utils/array.js';

const generateMatrix = num => {
  const result = [];
  let counter = 1;
  let top = 0, bottom = num - 1, left = 0, right = num - 1;

  num *= num;
  while (counter <= num) {
    for (let count = left; count <= right; count++) {
      result[top] ||= [];
      result[top][count] = counter++;
    }

    for (let count = ++top; count <= bottom; count++) {
      result[count] ||= [];
      result[count][right] = counter++;
    }

    for (let count = --right; count >= left; count--)
      result[bottom][count] = counter++;

    for (let count = --bottom; count >= top; count--)
      result[count][left] = counter++;

    left++;
  }

  return result;
}

let num, expected, actual;

num = 1;
expected = [[1]];
actual = generateMatrix(num);
console.assert(areEquivalent(expected, actual), '%o', { num, expected, actual });

num = 2;
expected = [[1, 2], [4, 3]];
actual = generateMatrix(num);
console.assert(areEquivalent(expected, actual), '%o', { num, expected, actual });

num = 3;
expected = [[1, 2, 3], [8, 9, 4], [7, 6, 5]];
actual = generateMatrix(num);
console.assert(areEquivalent(expected, actual), '%o', { num, expected, actual });

num = 4;
expected = [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]];
actual = generateMatrix(num);
console.assert(areEquivalent(expected, actual), '%o', { num, expected, actual });
