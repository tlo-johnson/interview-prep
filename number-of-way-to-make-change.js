// https://www.algoexpert.io/questions/number-of-ways-to-make-change
// time: O(t ^ n) where t is the target and n is the number of coins. consider the complete tree
// space: O(t)

function numberOfWaysToMakeChange(target, coins) {
  const info = { numWays: 0, numCoinsUsed: new Set() }
  const coinCount = 0;
  helper(target, coins, coinCount, info);

  return info.numWays;
}

const helper = (target, coins, coinCount, info) => {
  if (target < 0) return;
  if (target === 0 && !info.numCoinsUsed.has(coinCount)) {
    info.numWays++;
    info.numCoinsUsed.add(coinCount);
    return;
  }

  for (let coin of coins) helper(target - coin, coins, coinCount + 1, info);
}

// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;
