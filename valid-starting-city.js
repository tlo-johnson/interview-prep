// https://www.algoexpert.io/questions/valid-starting-city
// time: O(n)
// space: O(n). can be reduced to constant space

function validStartingCity(distances, fuel, mpg) {
  const overage = [];
  for (let index = 0; index < distances.length; index++)
    overage.push(fuel[index] * mpg - distances[index]);

  return bestStartingCity(overage);
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
