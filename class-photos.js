// https://www.algoexpert.io/questions/class-photos
// time: O(n log n)
// space: O(1)

function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort();
  blueShirtHeights.sort();

  return canArrange(redShirtHeights, blueShirtHeights) || canArrange(blueShirtHeights, redShirtHeights);
}

const canArrange = (row1, row2) => {
  for (let count = 0; count < row1.length; count++)
    if (row1[count] >= row2[count]) return false;

  return true;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;
