// https://www.algoexpert.io/questions/move-element-to-end
// time: O(n)
// space: O(1)

function moveElementToEnd(array, toMove) {
  let left = 0, right = array.length - 1;

  while (left <= right) {
    if (array[left] === toMove) {
      swap(array, left, right--);
      continue;
    }

    left++;
  }

  return array;
}

const swap = (array, left, right) => {
  const temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
