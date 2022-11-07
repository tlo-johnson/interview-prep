// https://leetcode.com/problems/zigzag-conversion/

const convert = (str, numRows) => {
  const zigzag = write(str, numRows);
  return read(zigzag);
}

const write = (str, numRows, column = 0, index = 0, zigzag) => {
  if (!zigzag)
    zigzag = initZigZag(numRows);

  const strLength = str.length;
  let row = 0;

  while (row < numRows) {
    zigzag[row++][column] = str[index++];
    if (index === strLength) return zigzag;
  }

  row -= 2;
  while (row > 0) {
    zigzag[row--][++column] = str[index++];
    if (index === strLength) return zigzag;
  }

  return write(str, numRows, column + 1, index, zigzag);
}

const initZigZag = numRows => {
  zigzag = [];

  for (let count = 0; count < numRows; count++)
    zigzag[count] = [];

  return zigzag;
}

const read = zigzag => {
  let result = '';

  for (let row of zigzag)
    for (let column of row)
      if (column)
        result += column;

  return result;
}

str = "PAYPALISHIRING", numRows = 3;
console.log({ expected: "PAHNAPLSIIGYIR", actual: convert(str, numRows) });

str = "PAYPALISHIRING", numRows = 4;
console.log({ expected: "PINALSIGYAHRPI", actual: convert(str, numRows) });

/*
P   A   H   N
A P L S I I G
Y   I   R
*/

/* a better solution: instead of coming up with a zig zag matrix one could simply
 * maintain an array of strings, one string for each row. replace adding to zigzag 
 * with adding to the correct string for a row, and join all strings to get your
 * result
 */
