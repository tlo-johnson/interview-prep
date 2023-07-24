// https://www.algoexpert.io/questions/three-number-sort

function threeNumberSort(array, order) {
  const least = order[0];
  const max = order[2];

  let leastIndex = 0, maxIndex = array.length - 1, index = 0;
  while (index <= maxIndex) {
    if (array[index] !== least && array[index] !== max) {
      index++;
      continue;
    }

    if (array[index] === least) {
      swap(array, index, leastIndex++);
      index++;
      continue;
    }

    swap(array, index, maxIndex--);
  }

  return array;
}

const swap = (array, start, end) => {
  const temp = array[start];
  array[start] = array[end];
  array[end] = temp;
}

// Do not edit the line below.
exports.threeNumberSort = threeNumberSort;
