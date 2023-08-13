// https://www.algoexpert.io/questions/numbers-in-pi
// time: O(2^n + m) where n is pi.length and m is numbers.length
// space: O(n + m)

const numbersInPi = (pi, numbers) => helper(pi, new Set(numbers));

const helper = (pi, numbers, minSpaces = -1) => {
  if (!pi.length) return -1;

  for (let index = 1; index <= pi.length; index++) {
    const str = pi.slice(0, index);
    if (!numbers.has(str)) continue;

    const remainingPi = pi.slice(index);
    const remainingSpaces = helper(remainingPi, numbers, minSpaces);
    const currentMin = remainingSpaces === -1 ?
      (remainingPi.length ? -1 : 1 + remainingSpaces) :
      1 + remainingSpaces;
    minSpaces = minSpaces < 0 ? currentMin : Math.min(minSpaces, currentMin);
  }

  return minSpaces;
}

// Do not edit the line below.
exports.numbersInPi = numbersInPi;
