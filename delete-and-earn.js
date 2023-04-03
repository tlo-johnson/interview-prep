// https://leetcode.com/problems/delete-and-earn/?envType=study-plan&id=dynamic-programming-i

const deleteAndEarn = nums => {
  const sums = {};
  for (let num of nums) {
    sums[num] ||= 0;
    sums[num] += num;
  }

  let points = [0, 0];

  Object.keys(sums).sort((a, b) => a - b).forEach(num => {
    if (sums[num - 1] === undefined) {
      points.push(points[points.length - 1] + sums[num]);
      return;
    }

    points.push(Math.max(points[points.length - 2] + sums[num], points[points.length - 1]));
  });

  return points[points.length - 1];
}
