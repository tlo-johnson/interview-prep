// https://leetcode.com/problems/reshape-the-matrix/?envType=study-plan&id=data-structure-i

const matrixReshape = (matrix, numRows, numColumns) => {
  if (matrix.length * matrix[0].length !== numRows * numColumns) return matrix;

  const result = [];
  let newRow;
  let count = 0;

  for (let row of matrix)
    for (let element of row) {
      if (count++ % numColumns === 0) {
        newRow = [];
        result.push(newRow);
      }

      newRow.push(element);
    }

  return result;
}

let matrix = [[1,2],[3,4]], numRows = 1, numColumns = 4;
console.log(matrixReshape(matrix, numRows, numColumns));

matrix = [[1,2],[3,4]], numRows = 2, numColumns = 4;
console.log(matrixReshape(matrix, numRows, numColumns));
