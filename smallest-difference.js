// https://www.algoexpert.io/questions/smallest-difference
// time: O(n log n + m log m)
// space: O(1)

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let oneIndex = twoIndex = 0, result = [], minDifference = Infinity;
  while (oneIndex < arrayOne.length && twoIndex < arrayTwo.length) {
    const difference = Math.abs(arrayOne[oneIndex] - arrayTwo[twoIndex]);
    if (difference < minDifference) {
      result = [arrayOne[oneIndex], arrayTwo[twoIndex]];
      minDifference = difference;
    }

    arrayOne[oneIndex] < arrayTwo[twoIndex] ? oneIndex++ : twoIndex++;
  }

  return result;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
