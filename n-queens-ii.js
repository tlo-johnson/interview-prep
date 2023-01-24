// https://leetcode.com/problems/n-queens/

const totalNQueens = (numQueens) => {
  const attackedSquares = {
    columns: new Set(),
    diagonals: {
      positive: new Set(),
      negative: new Set()
    }
  };

  const board = [];
  for (let rowIndex = 0; rowIndex < numQueens; rowIndex++) {
    const row = [];
    for (let columnIndex = 0; columnIndex < numQueens; columnIndex++) {
      row[columnIndex] = '.';
    }
    board.push(row);
  }

  return solve(board, numQueens, attackedSquares);
}

const solve = (board, numQueens, attackedSquares, numSolutions = 0, rowIndex = 0) => {
  if (rowIndex === numQueens)
    return ++numSolutions;

  for (let columnIndex = 0; columnIndex < numQueens; columnIndex++) {
    if (attackedSquares.columns.has(columnIndex) ||
       attackedSquares.diagonals.positive.has(rowIndex + columnIndex) ||
       attackedSquares.diagonals.negative.has(rowIndex - columnIndex)) continue;

    placeQueen(board, rowIndex, columnIndex, attackedSquares);
    numSolutions = solve(board, numQueens, attackedSquares, numSolutions, rowIndex + 1);
    removeQueen(board, rowIndex, columnIndex, attackedSquares);
  }

  return numSolutions;
}

const placeQueen = (board, rowIndex, columnIndex, attackedSquares) => {
  board[rowIndex][columnIndex] = 'Q';
  attackedSquares.columns.add(columnIndex);
  attackedSquares.diagonals.positive.add(rowIndex + columnIndex);
  attackedSquares.diagonals.negative.add(rowIndex - columnIndex);
}

const removeQueen = (board, rowIndex, columnIndex, attackedSquares) => {
  board[rowIndex][columnIndex] = '.';
  attackedSquares.columns.delete(columnIndex);
  attackedSquares.diagonals.positive.delete(rowIndex + columnIndex);
  attackedSquares.diagonals.negative.delete(rowIndex - columnIndex);
}

let numQueens, expected, actual;

numQueens = 1;
expected = 1;
actual = totalNQueens(numQueens);
console.assert(expected === actual, '%o', { numQueens, expected, actual });

numQueens = 2;
expected = 0;
actual = totalNQueens(numQueens);
console.assert(expected === actual, '%o', { numQueens, expected, actual });

numQueens = 3;
expected = 0;
actual = totalNQueens(numQueens);
console.assert(expected === actual, '%o', { numQueens, expected, actual });

numQueens = 4;
expected = 2;
actual = totalNQueens(numQueens);
console.assert(expected === actual, '%o', { numQueens, expected, actual });

numQueens = 5;
expected = 10;
actual = totalNQueens(numQueens);
console.assert(expected === actual, '%o', { numQueens, expected, actual });

numQueens = 9;
expected = 352;
actual = totalNQueens(numQueens);
console.assert(expected === actual, '%o', { numQueens, expected, actual });
