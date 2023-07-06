// https://www.algoexpert.io/questions/selection-sort
// time: O(n²)
// space: O(1)

function selectionSort(array) {
  for (let index = 0; index < array.length; index++) {
    let subIndex = smallestIndex = index;

    while (subIndex < array.length) {
      if (array[smallestIndex] > array[subIndex])
        smallestIndex = subIndex;
      subIndex++;
    }

    const temp = array[smallestIndex];
    array[smallestIndex] = array[index];
    array[index] = temp;
  }

  return array;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
