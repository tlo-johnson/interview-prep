// https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/
// unsolved

const ways = (pizza, pieces) => {
  const possibleCuts = walk(pizza);
  return numWays(pizza, pieces, possibleCuts);
}

const walk = pizza => {
  const possibleCuts = new Set();
  const rowsWithApple = new Set();
  const columnsWithApple = new Set();

  for (let rowIndex = 0; rowIndex < pizza.length; rowIndex++) {
    const row = pizza[rowIndex].split('');
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      const column = row[columnIndex];
      if (column === 'A') {
        rowsWithApple.add(rowIndex);
        columnsWithApple.add(columnIndex);

        if (rowsWithApple.has(rowIndex - 1))
          possibleCuts.add(`${rowIndex}-horizontal`);
        if (columnsWithApple.has(columnIndex - 1))
          possibleCuts.add(`${columnIndex}-vertical`);
      }
    }
  }

  return possibleCuts;
}

const numWays = (pizza, pieces, possibleCuts, top = 0, left = 0, cutsMade = new Set()) => {
  if (pieces === 1) {
    return 1;
  }

  let result = 0;

  for (let rowIndex = top; rowIndex < pizza.length; rowIndex++)
    if (possibleCuts.has(`${rowIndex}-horizontal`) && !cutsMade.has(`${rowIndex}-horizontal`)) {
      cutsMade.add(`${rowIndex}-horizontal`);
      result += numWays(pizza, pieces - 1, possibleCuts, rowIndex, left, cutsMade);
    }

  for (let columnIndex = left; columnIndex < pizza[0].length; columnIndex++)
    if (possibleCuts.has(`${columnIndex}-vertical`) && !cutsMade.has(`${columnIndex}-vertical`)) {
      cutsMade.add(`${columnIndex}-vertical`);
      result += numWays(pizza, pieces - 1, possibleCuts, top, columnIndex, cutsMade);
    }

  return result;
}

let pizza, pieces, expected, actual;

// pizza = ['A', 'A', 'A'];
// pieces = 3;
// expected = 1;
// actual = ways(pizza, pieces);
// console.assert(expected === actual, '%o', { pizza, pieces, expected, actual })
//
pizza = ["A..","AAA","..."];
pieces = 3;
expected = 3;
actual = ways(pizza, pieces);
console.assert(expected === actual, '%o', { pizza, pieces, expected, actual })
