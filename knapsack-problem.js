// https://www.algoexpert.io/questions/knapsack-problem

function knapsackProblem(items, capacity) {
  const [value, _, indices] = helper(items, capacity);
  return [value, indices];
}

const helper = (items, capacity, selected = [0, 0, []], index = 0, memo = new Set()) => {
  const key = `value: ${selected[0]} | weight: ${selected[1]} | index: ${index}`;
  if (memo[key]) return memo[key];
  
  if (selected[1] > capacity) return [-1, Infinity, []];
  if (index >= items.length) return selected;

  const [value, weight] = items[index];
  const [currentValue, currentWeight, indices] = selected;

  const withoutItem = helper(items, capacity, selected, index + 1, memo);
  const withItem = helper(items, capacity, [currentValue + value, currentWeight + weight, [...indices, index]], index + 1, memo);

  const result = withItem[0] > withoutItem[0] ? withItem : withoutItem;
  memo[key] = result;
  return result;
}

// Do not edit the line below.
exports.knapsackProblem = knapsackProblem;
