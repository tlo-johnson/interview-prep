// https://leetcode.com/problems/reducing-dishes/

const maxSatisfaction = satisfaction => {
  satisfaction.sort((a, b) => b - a);

  let coefficient = 0;
  let sum = 0;

  for (let num of satisfaction) {
    sum += num;
    if (coefficient + sum <= coefficient)
      return coefficient;
      
    coefficient += sum;
  }

  return coefficient;
}
