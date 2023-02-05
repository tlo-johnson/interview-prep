// https://leetcode.com/problems/sqrtx/

const mySqrt = (num, sqrt = 1, factor = 1000) => {
  if (num === 0) return 0;

  while (sqrt * sqrt < num) {
    sqrt += factor;
  }

  if (sqrt * sqrt === num)
    return sqrt;

  if (factor === 1)
    return sqrt - 1;

  return mySqrt(num, sqrt - factor, Math.floor(factor / 2));
}
