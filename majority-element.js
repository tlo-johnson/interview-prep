// https://www.algoexpert.io/questions/majority-element
// time: O(n)
// space: O(1)

function majorityElement(array) {
  let count = 0, currentElement = 0;
  for (let element of array) {
    if (currentElement === 0) {
      currentElement = element;
      count++;
      continue;
    }

    currentElement === element ? count++ : count--;
    if (count === 0) currentElement = 0;
  }

  return currentElement;
}

// Do not edit the line below.
exports.majorityElement = majorityElement;
