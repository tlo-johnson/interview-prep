// https://www.algoexpert.io/questions/largest-range
// time: O(n)
// space: O(n)

function largestRange(array) {
  const components = {};
  for (let num of array) {
    if (components[num]) continue;

    components[num] = { start: num, count: 1 };
    union(num, num + 1, components);
    union(num - 1, num, components);
  }

  const largest = Object.values(components).reduce((acc, curr) => (acc.count || -Infinity) < curr.count ? curr : acc);
  return [ largest.start, largest.start + largest.count - 1 ];
}

const union = (lower, higher, components) => {
  if (!components[lower] || !components[higher]) return;

  while (components[lower].start !== lower) lower = components[lower].start;
  const component = components[lower];
  component.count += components[higher].count;
  components[higher] = { start: component.start };
}

// Do not edit the line below.
exports.largestRange = largestRange;
