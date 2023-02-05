// https://leetcode.com/problems/sort-colors/

const sortColors = nums => {
  const colorIndexes = [-1, -1, -1];

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];

    for (let colorIndex = 0; colorIndex < colorIndexes.length; colorIndex++) {
      if (num <= colorIndex) colorIndexes[colorIndex]++;
      if (nums[index] === colorIndex)
        swap(nums, index, colorIndexes[colorIndex]);
    };
  }
}

const swap = (nums, source, destination) => {
  if (source === destination) return;

  const temp = nums[source];
  nums[source] = nums[destination];
  nums[destination] = temp;
}

/*
 * [0, 2, 2, 1, 1, 0]
 */
