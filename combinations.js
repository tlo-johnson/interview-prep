// https://leetcode.com/problems/combinations/

import { areEquivalent } from './utils/array.js';

const combine = (num1, num2) => {
  const base = [];
  for (let count = 1; count <= num1; count++)
    base.push(count);

  const combinations = [];
  const numsNeeded = num2 - 1;
  const maxNum = base.length - numsNeeded;
    for (let count = 1; count <= maxNum; count++) {
    let temp = count;
    while (temp <= maxNum) {
      combinations.push([count, ...base.slice(temp, temp + numsNeeded)]);
      temp++;
    }
  }

  return combinations;
}

let num1, num2, expected, actual;

num1 = 4;
num2 = 2;
expected = [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]];
actual = combine(num1, num2);
console.assert(areEquivalent(expected, actual), '%o', { num1, num2, expected, actual });

num1 = 1;
num2 = 1;
expected = [[1]];
actual = combine(num1, num2);
console.assert(areEquivalent(expected, actual), '%o', { num1, num2, expected, actual });

num1 = 20;
num2 = 3;
expected = [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]];
actual = combine(num1, num2);
console.assert(areEquivalent(expected, actual), '%o', { num1, num2, expected, actual });
