// https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms

const firstDayBeenInAllRooms = nextVisit => {
  let index = 0, count = 0n;
  const maxCount = BigInt(Math.pow(10, 9) + 7);
  while (index !== nextVisit.length - 1) {
    if (nextVisit[index] === index)
      count = (count + 2n) % maxCount;
    else {
      const diff = nextVisit[index] === 0 ? 0 : nextVisit[nextVisit[index] - 1];
      count = (count + (count - BigInt(diff) + 2n)) % maxCount;
    }
    nextVisit[index] = count;
    index++;
  }

  // it's possible to have a negative count since you go back to precomputed numbers
  // after the modulo operator
  while (count < 0)
    count += maxCount;

  return count;
}
