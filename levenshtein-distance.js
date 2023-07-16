// https://www.algoexpert.io/questions/levenshtein-distance
// time: O(nm) where n is length of str1 and m is length of str2
// space: O(nm) to store the distances two-dimensional array

function levenshteinDistance(str1, str2) {
  const distances = [];

  for (let row = 0; row <= str1.length; row++) {
    distances[row] = [];
    for (let col = 0; col <= str2.length; col++) {
      if (row === 0 && col === 0) {
        distances[row][col] = 0;
        continue;
      }

      if (row === 0) {
        distances[row][col] = col;
        continue;
      }

      if (col === 0) {
        distances[row][col] = row;
        continue;
      }

      distances[row][col] = (str1[row - 1] === str2[col - 1]) ?
        distances[row - 1][col - 1] :
        Math.min(distances[row - 1][col], distances[row][col - 1], distances[row - 1][col - 1]) + 1;
    }
  }

  return distances[str1.length][str2.length];
}

// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;

/*
    ""    a   b   c
""  0     1   2   3
y   1     1   2   3
a   2     1   2   3
b   3     2   1   2
d   4     3   2   2
*/
