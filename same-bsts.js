// https://www.algoexpert.io/questions/same-bsts
// time: O(n^2)
// space: O(d)

function sameBsts(arrayOne, arrayTwo) {
  if (!arrayOne.length && !arrayTwo.length) return true;
  if (arrayOne.length !== arrayTwo.length || arrayOne[0] !== arrayTwo[0]) return false;

  const { left: leftOne, right: rightOne } = partition(arrayOne);
  const { left: leftTwo, right: rightTwo } = partition(arrayTwo);
  return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
}

const partition = array => {
  const left = [];
  const right = [];

  for (let index = 1; index < array.length; index++)
    array[index] < array[0] ? left.push(array[index]) : right.push(array[index]);

  return { left, right };
}

// Do not edit the line below.
exports.sameBsts = sameBsts;
