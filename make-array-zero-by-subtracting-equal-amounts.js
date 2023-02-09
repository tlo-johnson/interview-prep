// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/

const minimumOperations = nums => {
  let count = 0, min;

  while (true) {
    nums = nums.filter(num => num);
    min = Math.min(...nums);
    if (min === Infinity) break;

    count++;
    nums = nums.map(num => num - min).filter(num => num);
  }

  return count;
}
