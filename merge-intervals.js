// a more efficient solution exists

import { areEquivalent } from './utils/array.js';

const merge = (intervals) => {
	const mergedIntervals = mergeIntervals(intervals);
	return collectIntervals(mergedIntervals);
}

const mergeIntervals = (intervals) => {
	const merged = [];
	let interval = 1;

	for (let index = 0; index < intervals.length; index++) {
		const [startIndex, endIndex] = intervals[index];
		const start = merged[startIndex];
		const end = merged[endIndex];

		if (!start && !end) updateInterval(merged, startIndex, endIndex, interval++);
		if (start && !end) updateInterval(merged, startIndex, endIndex, start);
		if (!start && end) updateInterval(merged, startIndex, endIndex, end);
		if (start && end) mergeInterval(merged, startIndex, endIndex, start);
	}

	return merged;
}

const updateInterval = (merged, startIndex, endIndex, interval) => {
	while (startIndex <= endIndex)
		merged[startIndex++] = interval;
}

const mergeInterval = (merged, startIndex, endIndex) => {
	const clobberedInterval = merged[endIndex];
	updateInterval(merged, startIndex, endIndex, merged[startIndex]);

	if (merged[endIndex + 1] === clobberedInterval)
		clobberInterval(merged, endIndex);
}

const clobberInterval = (merged, index) => {
	const interval = merged[index];
	const clobberedInterval = merged[++index]
	while (merged[index] === clobberedInterval)
		merged[index++] = interval;
}

const collectIntervals = (merged) => {
	let startIndex;
	const intervals = [];

	for (let index = 0; index < merged.length; index++) {
		if (merged[index] === undefined) continue;
		if (merged[index - 1] !== merged[index]) startIndex = index;
		if (merged[index + 1] !== merged[index]) {
			intervals.push([startIndex, index]);
		}
	}

	return intervals;
}

let intervals, expected, actual;

intervals = [[1, 3], [4, 6], [3, 4]];
expected = [[1, 6]];
actual = merge(intervals);
console.assert(areEquivalent(expected, actual), '%o', { intervals, expected, actual });

intervals = [[1, 2], [3, 4], [5, 6]];
expected = [[1, 2], [3, 4], [5, 6]];
actual = merge(intervals);
console.assert(areEquivalent(expected, actual), '%o', { intervals, expected, actual });

intervals = [[1, 3], [2, 4], [5, 6]];
expected = [[1, 4], [5, 6]];
actual = merge(intervals);
console.assert(areEquivalent(expected, actual), '%o', { intervals, expected, actual });

intervals = [[1, 2], [3, 5], [4, 4]];
expected = [[1, 2], [3, 5]];
actual = merge(intervals);
console.assert(areEquivalent(expected, actual), '%o', { intervals, expected, actual });

intervals = [[1, 200], [3, 5], [4, 4]];
expected = [[1, 200]];
actual = merge(intervals);
console.assert(areEquivalent(expected, actual), '%o', { intervals, expected, actual });

// what's the size of an array with 10k integers?
