// https://leetcode.com/problems/insert-interval/

import { areEquivalent } from './utils/array.js';

const insert = (intervals, newInterval) => {
  insertNewInterval(intervals, newInterval);
  return mergeIntervals(intervals);
}

const insertNewInterval = (intervals, newInterval) => {
  const [newStart] = newInterval;
  
  for (let index = 0; index < intervals.length; index++) {
    const [start] = intervals[index];
    if (newStart > start) continue;

    intervals.splice(index, 0, newInterval);
    return;
  }

  intervals.push(newInterval);
}

const mergeIntervals = (intervals) => {
  const merged = [];
  let currInterval = intervals[0];

  for (let index = 1; index < intervals.length; index++) {
    const nextInterval = intervals[index];
    if (currInterval[1] >= nextInterval[0]) {
      currInterval[1] = Math.max(nextInterval[1], currInterval[1]);
      continue;
    }

    merged.push(currInterval);
    currInterval = nextInterval;
  }

  merged.push(currInterval);
  return merged;
}

let intervals, newInterval, expected, actual;

intervals = [[1, 3], [4, 6]];
newInterval = [2, 5];
expected = [[1, 6]];
actual = insert(intervals, newInterval);
console.assert(areEquivalent(expected, actual), '%o', { question: 1, intervals, newInterval, expected, actual });

intervals = [[1, 3], [4, 6]];
newInterval = [0, 7];
expected = [[0, 7]];
actual = insert(intervals, newInterval);
console.assert(areEquivalent(expected, actual), '%o', {  question: 2, intervals, newInterval, expected, actual });

intervals = [[1, 2], [4, 6]];
newInterval = [3, 3];
expected = [[1, 2], [3, 3], [4, 6]];
actual = insert(intervals, newInterval);
console.assert(areEquivalent(expected, actual), '%o', { question: 3, intervals, newInterval, expected, actual });

intervals = [[1, 2], [4, 9]];
newInterval = [6, 7];
expected = [[1, 2], [4, 9]];
actual = insert(intervals, newInterval);
console.assert(areEquivalent(expected, actual), '%o', { question: 4, intervals, newInterval, expected, actual });