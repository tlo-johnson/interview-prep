// https://www.algoexpert.io/questions/find-three-largest-numbers
// time: O(n)
// space: O(1)

function findThreeLargestNumbers(array) {
  const result = [-Infinity, -Infinity, -Infinity];
  for (let num of array) {
    if (num < result[0]) continue;
    for (let count = 2; count >= 0; count--) num = add(num, result, count);
  }

  return result;
}

const add = (num, array, index) => {
  if (num <= array[index]) return num;

  const temp = array[index];
  array[index] = num;
  return temp;
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
