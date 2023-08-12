// https://www.algoexpert.io/questions/knapsack-problem
// time: O(nc)
// space: O(nc) + O(n). being explicit here because i'm learning

function knapsackProblem(items, capacity, index = 0, memo = {}) {
  if (capacity < 0) return null;
  if (index >= items.length) return [0, []];

  const key = `${capacity}|${index}`;
  if (key in memo) return memo[key];

  const withoutItem = knapsackProblem(items, capacity, index + 1, memo);

  const [value, weight] = items[index];
  const withItem = knapsackProblem(items, capacity - weight, index + 1, memo);

  if (withItem === null) memo[key] = withoutItem;
  else {
    withItem[0] += value;
    withItem[1].push(index);
    memo[key] = withItem[0] > withoutItem[0] ? withItem : withoutItem;
  }

  return [memo[key][0], [...memo[key][1]]];
}

// Do not edit the line below.
exports.knapsackProblem = knapsackProblem;
