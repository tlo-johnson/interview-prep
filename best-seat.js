// https://www.algoexpert.io/questions/best-seat
// time: O(n)
// space: O(1)

function bestSeat(seats) {
  let maxSpace = count = index = startIndex = 0;
  let maxIndex = -1;

  while (index < seats.length) {
    if (seats[index] === 0) {
      count++;
    } else {
      if (maxSpace < count) {
        maxSpace = count;
        maxIndex = startIndex + Math.floor((count - 1) / 2);
      }

      startIndex = index + 1;
      count = 0;
    }

    index++;
  }

  return maxIndex;
}

// Do not edit the line below.
exports.bestSeat = bestSeat;
