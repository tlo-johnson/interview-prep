// https://www.algoexpert.io/questions/blackjack-probability
// time: O(t) where t is target
// space: O(t)

function blackjackProbability(target, startingHand) {
  const probability = helper(target, startingHand);
  return Math.round(probability * 1000) / 1000;
}

const helper = (target, startingHand, memoized = {}) => {
  if (startingHand >= target - 4 && startingHand <= target) return 0;
  if (memoized[startingHand]) return memoized[startingHand];

  const bust = Math.max(startingHand + 10 - target, 0);
  const draw = Math.min(target - 5 - startingHand, 10);

  let probability = bust * 0.1;
  for (let count = 1; count <= draw; count++)
    probability += 0.1 * helper(target, startingHand + count, memoized);

  memoized[startingHand] = probability;
  return probability;
}

// Do not edit the line below.
exports.blackjackProbability = blackjackProbability;
