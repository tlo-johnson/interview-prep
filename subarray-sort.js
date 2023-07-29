// https://www.algoexpert.io/questions/subarray-sort
// time: O(n)
// space: O(1)

function subarraySort(array) {
  let leftIndex = 0;
  while (leftIndex < array.length - 1 && array[leftIndex] <= array[leftIndex + 1]) leftIndex++;
  if (leftIndex === array.length - 1) return [-1, -1];

  let rightIndex = array.length - 1;
  while (rightIndex > 0 && array[rightIndex] >= array[rightIndex - 1] && array[rightIndex] >= array[leftIndex - 1]) rightIndex--;

  leftIndex++;
  rightIndex--;

  let subarraySmallest = array[leftIndex];
  let subarrayLargest = array[rightIndex];
  while (leftIndex <= rightIndex) {
    if (array[leftIndex] < subarraySmallest) subarraySmallest = array[leftIndex];
    if (array[leftIndex] > subarrayLargest) subarrayLargest = array[leftIndex];
    leftIndex++;
  }

  let startIndex = 0;
  while (array[startIndex] <= subarraySmallest) startIndex++;

  let endIndex = array.length - 1;
  while (array[endIndex] >= subarrayLargest) endIndex--;

  return [startIndex, endIndex];
}

// Do not edit the line below.
exports.subarraySort = subarraySort;
