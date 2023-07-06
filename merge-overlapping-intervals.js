// https://www.algoexpert.io/questions/merge-overlapping-intervals
// time: O(n log n) where n is number of intervals
// space: O(n)

function mergeOverlappingIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];
  for (let index = 1; index < intervals.length; index++) {
    const [prevStart, prevEnd] = result[result.length - 1];
    const [currStart, currEnd] = intervals[index];

    if (prevEnd >= currStart)
      result[result.length - 1] = [prevStart, Math.max(prevEnd, currEnd)]
    else result.push([currStart, currEnd]);
  }

  return result;
}

// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
