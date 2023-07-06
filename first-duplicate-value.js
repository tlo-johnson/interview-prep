// https://www.algoexpert.io/questions/first-duplicate-value
// time: O(n)
// space: O(1)

function firstDuplicateValue(array) {
  for (let index = 0; index < array.length; index++) {
    const num = Math.abs(array[index]);
    if (array[num - 1] < 0) return num;
    array[num - 1] *= -1;
  }

  return -1;
}

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;
