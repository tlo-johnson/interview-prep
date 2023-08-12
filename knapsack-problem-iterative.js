// https://www.algoexpert.io/questions/knapsack-problem
// time: O(nc)
// space: O(nc)

function knapsackProblem(items, capacity) {
  const { value, indices } = helper(items, capacity);
  return [ value, indices ];
}

const helper = (items, capacity) => {
  const table = Array(items.length + 1)
    .fill()
    .map(() => Array(capacity + 1).fill({ value: 0, indices: [] }));

  for (let itemsIndex = 1; itemsIndex <= items.length; itemsIndex++) {
    for (let capacityIndex = 1; capacityIndex <= capacity; capacityIndex++) {
      const [ value, weight ] = items[itemsIndex - 1];
      const { value: valueWithoutItem, indices: indicesWithoutItem } = table[itemsIndex - 1][capacityIndex];
      const { value: previousValue, indices: previousIndices } = table[itemsIndex - 1][capacityIndex - weight] || { value: -Infinity, indices: [] };

      table[itemsIndex][capacityIndex] = previousValue + value > valueWithoutItem ?
        { value: previousValue + value, indices: [...previousIndices, itemsIndex - 1]} :
        { value: valueWithoutItem, indices: [...indicesWithoutItem] };
    }
  }

  return table[items.length][capacity];
}

// Do not edit the line below.
exports.knapsackProblem = knapsackProblem;
