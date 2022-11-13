// https://leetcode.com/problems/container-with-most-water/

const maxArea = heights => {
  let result = -1, i = 0, j = heights.length - 1;

  while (i < j) {
    const width = j - i;
    const height = Math.min(heights[i], heights[j]);
    result = Math.max(result, width * height);

    heights[i] < heights[j] ? i++ : j--;
  }

  return result;
}

height = [1,8,6,2,5,4,8,3,7];
console.assert(maxArea(height) === 49, height);

height = [1,1];
console.assert(maxArea(height) === 1, height);
