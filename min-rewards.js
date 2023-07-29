// https://www.algoexpert.io/questions/min-rewards
// time: O(n)
// space: O(n)

function minRewards(scores) {
  const rewards = [];
  let index = 0;
  while (index >= 0 && index < scores.length) {
    const valleyIndex = findNextValley(scores, index);
    index = giveRewards(scores, valleyIndex, rewards);
  }
  return rewards.reduce((sum, curr) => sum + curr);
}

const findNextValley = (scores, index) => {
  while (index < scores.length - 1 && scores[index] > scores[index + 1]) index++;
  return index;
}

const giveRewards = (scores, valleyIndex, rewards) => {
  if (rewards[valleyIndex]) return Infinity;

  rewards[valleyIndex] = 1;
  let index = valleyIndex - 1;
  while (index >= 0 && scores[index] > scores[index + 1]) {
    const reward = rewards[index + 1] + 1;
    rewards[index] = Math.max(rewards[index] || 0, reward);
    index--;
  }

  index = valleyIndex + 1;
  while (index < scores.length && scores[index] > scores[index - 1]) {
    const reward = rewards[index - 1] + 1;
    rewards[index] = Math.max(rewards[index] || 0, reward);
    index++;
  }

  return index - 1;
}

// Do not edit the line below.
exports.minRewards = minRewards;
