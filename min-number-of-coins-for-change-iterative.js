// https://www.algoexpert.io/questions/min-number-of-coins-for-change
// time: O(nt) where n is number of coins and t is target
// space: O(t)

function minNumberOfCoinsForChange(target, coins) {
  const minNumCoins = new Array(target + 1).fill(Infinity);
  minNumCoins[0] = 0;

  for (let index = 1; index <= target; index++) {
    for (let coin of coins) {
      if (coin > index) continue;
      if (coin === index) {
        minNumCoins[index] = 1;
        continue;
      }

      minNumCoins[index] = Math.min(minNumCoins[index], minNumCoins[index - coin] + 1);
    }
  }

  return minNumCoins[target] === Infinity ? -1 : minNumCoins[target];
}

// Do not edit the line below.
exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;
