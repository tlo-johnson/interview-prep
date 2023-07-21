// https://www.algoexpert.io/questions/valid-starting-city
// time: O(n)
// space: O(1)

function validStartingCity(distances, fuel, mpg) {
  for (let index = 0; index < distances.length; index++)
    distances[index] = fuel[index] * mpg - distances[index];

  return bestStartingCity(distances);
}

const bestStartingCity = overage => {
  let startIndex = sum = 0;

  for (let index = 0; index < overage.length; index++) {
    sum += overage[index];

    if (sum < 0) {
      sum = 0;
      startIndex = index + 1;
    }
  }

  return startIndex;
}

// Do not edit the line below.
exports.validStartingCity = validStartingCity;
