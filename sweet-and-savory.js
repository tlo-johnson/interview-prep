// https://www.algoexpert.io/questions/sweet-and-savory
// time: O(n log n)
// space: O(1)

function sweetAndSavory(dishes, target) {
  dishes.sort((a, b) => a - b);

  let left = 0, right = dishes.length - 1, closestDishes = [0, 0];

  while (left < right) {
    const sweet = dishes[left];
    const savory = dishes[right];
    if (sweet > 0 || savory < 0) break;

    const profile = sweet + savory;
    if (profile === target) return [dishes[left], dishes[right]];

    if (profile > target) {
      right--;
      continue;
    }

    const closestProfile = closestDishes[0] + closestDishes[1];
    if (closestDishes[left] === 0 || closestDishes[right] === 0 || profile > closestProfile)
      closestDishes = [dishes[left], dishes[right]];

    left++;
  }

  return closestDishes;
}

// Do not edit the line below.
exports.sweetAndSavory = sweetAndSavory;
