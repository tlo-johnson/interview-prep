// https://www.algoexpert.io/questions/binary-search
// time: O(log n)
// space: O(1)

function binarySearch(array, target) {
  let left = 0, right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) return mid;
    if (array[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
