// https://www.algoexpert.io/questions/tandem-bicycle
// time: O(n log n) to sort
// space: O(1)

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);
  if (fastest) blueShirtSpeeds = blueShirtSpeeds.reverse();

  let sum = redIndex = blueIndex = 0;
  while (redIndex < redShirtSpeeds.length)
    sum += Math.max(blueShirtSpeeds[blueIndex++], redShirtSpeeds[redIndex++]);

  return sum;
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;
