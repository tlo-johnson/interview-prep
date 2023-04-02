// https://leetcode.com/problems/climbing-stairs/?envType=study-plan&id=dynamic-programming-i

const climbStairs = num => {
  const ways = [0, 1, 2];
  for (let count = 3; count <= num; count++)
    ways.push(ways[count - 2] + ways[count - 1]);

  return ways[num];
}
