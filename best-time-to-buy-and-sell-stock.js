// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan&id=data-structure-i

const maxProfit_solution = prices => {
  let minPrice = prices[0];
  let result = 0;

  for (let price of prices) {
    if (price <= minPrice) {
      minPrice = price;
      continue;
    }

    const profit = price - minPrice;
    if (profit > result)
      result = profit;
  }

  return result;
}

const maxProfit_performance = prices => {
  let minIndex = result = 0;

  for (let index = 1; index < prices.length; index++) {
    if (prices[index] <= prices[minIndex])
      minIndex = index;
    else
      result = Math.max(result, prices[index] - prices[minIndex]);
  }

  return result;
}

const maxProfit = maxProfit_performance;

let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));

prices = [7,6,4,3,1]
console.log(maxProfit(prices));
