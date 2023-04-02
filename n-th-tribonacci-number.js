// https://leetcode.com/problems/n-th-tribonacci-number/?envType=study-plan&id=dynamic-programming-i

const tribonacci = num => {
  const memo = [0, 1, 1];
  for (let count = 3; count <= num; count++)
    memo[count] = memo[count - 1] + memo[count - 2] + memo[count - 3];

  return memo[num];
}
