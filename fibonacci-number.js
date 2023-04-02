// https://leetcode.com/problems/fibonacci-number/?envType=study-plan&id=dynamic-programming-i

const fib = (num, memo = { 0: 0, 1: 1 }) => {
  if (memo[num] === undefined)
    memo[num] = fib(num - 1, memo) + fib(num - 2, memo);

  return memo[num];
}
