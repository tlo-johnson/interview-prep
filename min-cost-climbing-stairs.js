// https://leetcode.com/problems/min-cost-climbing-stairs/?envType=study-plan&id=dynamic-programming-i

const minCostClimbingStairs = cost => {
  const minCosts = [cost[0], cost[1]];
  for (let step = 2; step < cost.length; step++)
    minCosts.push(Math.min(minCosts[step - 1], minCosts[step - 2]) + cost[step]);

  return Math.min(minCosts[minCosts.length - 1], minCosts[minCosts.length - 2]);
}

--

const minCostClimbingStairs = cost => {
  const minCosts = { 0: cost[0], 1: cost[1] };
  return Math.min(calcMinCost(cost, minCosts, cost.length - 2), calcMinCost(cost, minCosts, cost.length - 1));
}

const calcMinCost = (cost, minCosts, step) => {
  if (minCosts[step] === undefined)
    minCosts[step] = Math.min(calcMinCost(cost, minCosts, step - 1), calcMinCost(cost, minCosts, step - 2)) + cost[step];
  return minCosts[step];
}
