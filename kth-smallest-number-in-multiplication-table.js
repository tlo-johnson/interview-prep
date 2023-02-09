// https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/

const findKthNumber = (m, n, k) => {
  const sortedElements = [];

  let count = 1;
  while (count <= k) {
    const diagonal = generateDiagonal(count++, m, n);
    addDiagonal(sortedElements, diagonal);
  }

  for (let index = 0; index < sortedElements.length; index++) {
    if (!sortedElements[index]) continue;

    k -= sortedElements[index];
    if (k <= 0) return index;
  }
}

const generateDiagonal = (count, m, n) => {
  const diagonal = [];

  for (let row = 1, column = count; column >= 1; row++, column--)
    if (row <= m && column <= n)
      diagonal.push(row * column);

  return diagonal;
}

const addDiagonal = (sortedElements, diagonal) => {
  for (let index = 0; index < diagonal.length; index++) {
    const key = diagonal[index];
    sortedElements[key] ||= 0;
    sortedElements[key]++;
  }
}

/*
    1,  2,  3,  4,  5,  6
    2,  4,  6,  8, 10, 12
    3,  6,  9, 12, 15, 18
    4,  8, 12, 16, 20, 24
    5, 10, 15, 20, 25, 30
    6, 12, 18, 24, 30, 36

    diagonals along squares follow the same pattern
    compute next diagonal within matrix bounds, add to sorted list of elements
    return once kth smallest is found

    a linear solution is not efficient enough because 1 <= k <= 9 * 10^8
*/

let m, n, k, expected, actual;

m = 3;
n = 3;
k = 1;
expected = 1;
actual = findKthNumber(m, n, k);
console.assert(expected === actual, '%o', { m, n, k, expected, actual });
