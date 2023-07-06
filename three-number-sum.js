// https://www.algoexpert.io/questions/three-number-sum
// time: O(n²)
// space: O(n) because of the result array

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);

  const result = [];
  for (let index = 0; index < array.length; index++)
    twoNumberSum(array[index], array, index + 1, targetSum - array[index], result);
  return result;
}

const twoNumberSum = (num, array, startIndex, target, result) => {
  let endIndex = array.length - 1;

  while (startIndex < endIndex) {
    const sum = array[startIndex] + array[endIndex];

    sum === target ? result.push([num, array[startIndex++], array[endIndex++]]) :
      sum < target ? startIndex++ :
        endIndex--;
  }
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
