// https://www.algoexpert.io/questions/min-number-of-coins-for-change
// time: O(nt) where t is target and n is number of coins
// space: O(t) since the set stores the result for each encountered value of target

function minNumberOfCoinsForChange(target, coins) {
  const root = { target, coinsUsed: 0 };
  const queue = [root];
  const explored = new Set();
  let left = 0, right = 1;

  while (left < right) {
    const { target, coinsUsed } = queue[left++];
    if (target === 0) return coinsUsed;

    const key = `${target}|${coinsUsed}`;
    if (target < 0 || explored.has(key)) continue;

    for (let coin of coins)
      queue[right++] = { target: target - coin, coinsUsed: coinsUsed + 1 };

    explored.add(key);
  }

  return -1;
}

// Do not edit the line below.
exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;
