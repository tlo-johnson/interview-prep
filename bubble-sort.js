// https://www.algoexpert.io/questions/bubble-sort
// time: O(n²)
// space: O(1)

function bubbleSort(array) {
  let didSwap = true;

  while (didSwap) {
    didSwap = false;
    for (let index = 0; index < array.length - 1; index++) {
      if (array[index] <= array[index + 1]) continue;

      didSwap = true;
      const temp = array[index];
      array[index] = array[index + 1];
      array[index + 1] = temp;
    }
  }

  return array;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
