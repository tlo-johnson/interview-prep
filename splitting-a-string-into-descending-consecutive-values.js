// https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/

const splitString = str => {
  let num = Number(str);
  if (!num) return false;

  str = num.toString();
  const grid = createGrid(str);
  console.log(grid);
  return hasDescendingValues(grid);
}

const createGrid = str => {
  const grid = [];
  for (let index = 0; index < str.length; index++) {
    const digit = Number(str[index]);
    grid.forEach(row => addNumber(row, digit));

    if (digit)
      grid.push([digit])
  }
  return grid;
}

const addNumber = (row, digit) => {
  const newNum = Number(`${row[row.length - 1]}${digit}`);
  row.push(newNum);
}

const hasDescendingValues = grid => {
  for (let columnIndex = 0; columnIndex < grid[0].length; columnIndex++) {
    let num;
    let result = false;
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
      const row = grid[rowIndex];

      if (rowIndex === 0) {
        num = row[columnIndex];
        continue;
      }

      let comparer = row[columnIndex];
      if (!comparer && num % 10 === 0)
        comparer = row[columnIndex - 1];

      if (!comparer)
        break;

      if (comparer === num - 1) {
        --num;
        result = true;
        continue;
      }

      result = false;
      break;
    }

    if (result)
      return result;
  }

  return false;
}

// console.log(splitString("0090089"))
// console.log(splitString("1234"))
// console.log(splitString('050043'))
// console.log(splitString('1092'))
// console.log(splitString('109'));
console.assert(splitString('19181716151413121110') === true);

/*
 * str = 0090089
 * 9, 90, 900, 9008, 90089
 * 8, 89
 * 9
 *
 * // need to handle transition from 9 -> 10, 99 -> 100, 999 -> 1000, etc.
 *
 * str = 1234
 * 1, 12, 123, 1234
 * 2, 23, 234
 * 3, 34
 * 4
 *
 * str = 050043
 * 5, 50, 500, 5004, 50043
 * 4, 43
 * 3
 *
 * str = 1092
 * 1, 10, 109, 1092
 * 9, 92
 * 2
 */
