// https://www.algoexpert.io/questions/zigzag-traverse
// time: O(w * h)
// space: O(w * h)

function zigzagTraverse(array) {
  if (array.length === 0) return [];
  if (array[0].length === 0) return [];

  if (array.length === 1) return array[0];

  if (array[0].length === 1) {
    const result = [];
    let count = 0;
    while (count < array.length) result.push(array[count++][0]);
    return result;
  }

  const directions = {
    up: (rowIndex, columnIndex) => [rowIndex - 1, columnIndex + 1],
    down: (rowIndex, columnIndex) => [rowIndex + 1, columnIndex - 1]
  }

  let rowIndex = columnIndex = 0;
  const result = [array[rowIndex++][columnIndex], array[rowIndex][columnIndex]];
  let direction = 'up';
  while (result.length < array.length * array[0].length) {
    const [nextRow, nextColumn] = directions[direction](rowIndex, columnIndex);

    if (array[nextRow]?.[nextColumn] === undefined) {
      const nextIndices = turnCorner(array, rowIndex, columnIndex, direction);
      rowIndex = nextIndices[0];
      columnIndex = nextIndices[1];
      result.push(array[rowIndex][columnIndex]);
      direction = (direction === 'up') ? 'down' : 'up';
      continue;
    }

    rowIndex = nextRow
    columnIndex = nextColumn;
    result.push(array[rowIndex][columnIndex]);
  }

  return result;
}

const turnCorner = (array, rowIndex, columnIndex, direction) => {
  if (columnIndex === 0 && rowIndex === array.length - 1) return [rowIndex, columnIndex + 1];
  if (columnIndex === 0 || columnIndex === array[0].length - 1) return [rowIndex + 1, columnIndex];

  return [rowIndex, columnIndex + 1];
}

// Do not edit the line below.
exports.zigzagTraverse = zigzagTraverse;
