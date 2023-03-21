// https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/

const splitString = str => {
  str = BigInt(str).toString();
  const grid = createGrid(str);
  return isDescending(grid);
}

const createGrid = str => {
  const grid = [];

  for (let character of str) {
    for (let row of grid) {
      const newNum = row[row.length - 1] + character;
      row.push(newNum);
    }
    grid.push([character]);
  }

  return grid;
}

const isDescending = grid => {
  if (!grid.length)
    return false;

  const firstRow = grid[0];
  for (let columnIndex = 0; columnIndex < firstRow.length - 1; columnIndex++) {
    let currentNum;
    let rowIndex = 0;
    while (rowIndex < grid.length) {
      const row = grid[rowIndex];

      if (!currentNum) {
        currentNum = row[columnIndex];
        rowIndex += columnIndex + 1;
        continue;
      }

      if (Number(row[columnIndex]) === currentNum - 1) {
        currentNum--;
        rowIndex += columnIndex + 1;
        continue;
      }

      if (Number(row[columnIndex]) === 0) {
        rowIndex += columnIndex + 1;
        continue;
      }

      break;
    }

    if (rowIndex >= grid.length)
      return true;
  }

  return false;
}

console.assert(splitString('987'));
console.assert(splitString('90000080000007'));
console.assert(!splitString('900000800000070'), '900000800000070');
console.assert(splitString('90898887'));
console.assert(splitString('900899898'));
