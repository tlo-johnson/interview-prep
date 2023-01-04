/*
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 */

import { areEquivalent } from './utils/array.js';

const generateParenthesis = numPairs => {
  const result = [];
  recurse(numPairs, numPairs, result);
  return result;
}

const recurse = (numOpen, numClose, result, curr = "") => {
  if (numOpen)
    recurse(numOpen - 1, numClose, result, curr + "(")

  if (numClose && numOpen < numClose)
    recurse(numOpen, numClose - 1, result, curr + ")")

  if (!(numOpen || numClose)) result.push(curr);
}

let numPairs, actual, expected;

numPairs = 1;
actual = generateParenthesis(numPairs);
expected = ["()"];
console.assert(areEquivalent(expected, actual), '%o', {numPairs, actual, expected});

numPairs = 2;
actual = generateParenthesis(numPairs);
expected = ["(())", "()()"];
console.assert(areEquivalent(expected, actual), '%o', {numPairs, actual, expected});

numPairs = 3;
actual = generateParenthesis(numPairs);
expected = ["((()))", "(()())", "(())()", "()(())", "()()()"];
console.assert(areEquivalent(expected, actual), '%o', {numPairs, actual, expected});
