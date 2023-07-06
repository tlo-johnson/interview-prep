// https://www.algoexpert.io/questions/insertion-sort
// time: O(n²)
// space: O(1)

function insertionSort(array) {
  for (let index = 1; index < array.length; index++)
    insert(array, index);

  return array;
}

const insert = (array, index) => {
  while (index > 0 && array[index] < array[index - 1]) {
    const temp = array[index];
    array[index] = array[index - 1];
    array[index - 1] = temp;
    index--;
  }
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
