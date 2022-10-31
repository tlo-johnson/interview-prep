// https://leetcode.com/problems/pascals-triangle/?envType=study-plan&id=data-structure-i

const generate = numRows => {
  const result = [ [1], [1, 1] ];

  if (numRows === 1) return result.splice(0, 1);
  if (numRows === 2) return result;

  while (numRows > 2) {
    result.push([ 1, ...sums(result), 1]);
    numRows--;
  }

  return result;
}

const sums = rows => {
  const lastRow = rows[rows.length - 1];
  return lastRow.reduce((accumulator, current, index) => {
    if (index !== 0) accumulator.push(lastRow[index - 1] + current);
    return accumulator;
  }, []);
}

console.log(generate(1));
