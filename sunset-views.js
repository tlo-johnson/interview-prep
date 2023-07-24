// https://www.algoexpert.io/questions/sunset-views
// time: O(n)
// space: O(n) for results array

function sunsetViews(buildings, direction) {
  if (!buildings.length) return [];
  return direction === 'EAST' ? viewsFromRight(buildings) : viewsFromLeft(buildings);
}

const viewsFromRight = buildings => {
  let maxHeight = buildings[buildings.length - 1];
  const result = [buildings.length - 1];
  for (let index = buildings.length - 2; index >= 0; index--) {
    if (buildings[index] <= maxHeight) continue;

    result.push(index);
    maxHeight = buildings[index];
  }

  return result.reverse();
}

const viewsFromLeft = buildings => {
  let maxHeight = buildings[0];
  const result = [0];
  for (let index = 1; index < buildings.length; index++) {
    if (buildings[index] <= maxHeight) continue;

    result.push(index);
    maxHeight = buildings[index];
  }

  return result;
}

// Do not edit the line below.
exports.sunsetViews = sunsetViews;
