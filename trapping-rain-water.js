// https://leetcode.com/problems/trapping-rain-water/

import { areEquivalent } from "./utils/array.js";

/*
 * to trap water,
 *  next height must be less than current height
 *  some height later in array must be greater than or equal to current height
 *
 * test each height for trap
 *  if water is trapped, can continue from end of trap
 *
 * (0..n).each {
 *    if height >= max_height
 *      key (i.e. "#{lesser_index}|#{greater_index}")
 *      add trapped_water to total_trapped_water
 *      restart trapped_water count
 *      max_height = height
 *    else
 *      trapped_water += max_height - height
 *    end
 * }
 *
 * (n..0).each {
 *    repeat but when adding total_trapped_water, check if set contains key
 * }
 *
 * return trapped_water_forward + trapped_water_backwards
 */

const trap = (heights) => {
  const set = new Set();
  let result = 0, trappedWater = 0, maxHeight = 0, maxHeightIndex = -1;

  for (let index = 0; index < heights.length; index++) {
    const height = heights[index];
    if (height < maxHeight) {
      trappedWater += maxHeight - height;
      continue;
    }

    const key = [maxHeightIndex, index].sort().join('|');
    if (!set.has(key)) {
      set.add(key);
      result += trappedWater
    }

    trappedWater = 0;
    maxHeight = height;
    maxHeightIndex = index;
  }

  trappedWater = 0, maxHeight = 0, maxHeightIndex = -1;
  for (let index = heights.length - 1; index >= 0; index--) {
    const height = heights[index];
    if (height < maxHeight) {
      trappedWater += maxHeight - height;
      continue;
    }

    const key = [maxHeightIndex, index].sort().join('|');
    if (!set.has(key)) {
      set.add(key);
      result += trappedWater
    }

    trappedWater = 0;
    maxHeight = height;
    maxHeightIndex = index;
  }

  return result;
}

let heights, expected, actual;

// heights = [0,1,0,2,1,0,1,3,2,1,2,1];
// expected = 6;
// actual = trap(heights);
// console.assert(expected === actual, '%o', { heights, expected, actual });

heights = [4,2,0,3,2,5];
expected = 9;
actual = trap(heights);
console.assert(expected === actual, '%o', { heights, expected, actual });
