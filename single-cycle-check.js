// https://www.algoexpert.io/questions/single-cycle-check
// time: O(n)
// space: O(1)

function hasSingleCycle(array) {
  let count = index = 0;
  while(array[index] !== null) {
    let jump = array[index];
    array[index] = null;
    count++;

    if (Math.abs(jump) >= array.length) jump %= array.length;
    index += jump;
    if (index < 0) index = array.length + index;
    else if (index > array.length - 1) index -= array.length;
  }

  return count === array.length && index === 0;
}

// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;
