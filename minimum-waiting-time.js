// https://www.algoexpert.io/questions/minimum-waiting-time
// time: O(n log n) to sort
// space: O(1) to sort. done in-place using heap sort

function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);

  let sum = result = 0;
  for (let index = 0; index < queries.length - 1; index++) {
    sum += queries[index];
    result += sum;
  }

  return result;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
