// https://leetcode.com/problems/n-queens/

import { areEquivalent } from './utils/array.js';

const solveNQueens = (numQueens) => {
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

  const boards = [];
  solve(board, numQueens, attackedSquares, boards);
  return boards;
}

const solve = (board, numQueens, attackedSquares, boards, rowIndex = 0) => {
  if (rowIndex === numQueens) {
    saveBoard(boards, board);
    return;
  }

  for (let columnIndex = 0; columnIndex < numQueens; columnIndex++) {
    if (attackedSquares.columns.has(columnIndex) ||
       attackedSquares.diagonals.positive.has(rowIndex + columnIndex) ||
       attackedSquares.diagonals.negative.has(rowIndex - columnIndex)) continue;

    placeQueen(board, rowIndex, columnIndex, attackedSquares);
    solve(board, numQueens, attackedSquares, boards, rowIndex + 1);
    removeQueen(board, rowIndex, columnIndex, attackedSquares);
  }
}

const saveBoard = (boards, board) => {
  const solvedBoard = [];

  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    const row = [];
    for (let columnIndex = 0; columnIndex < board.length; columnIndex++) {
      row[columnIndex] = board[rowIndex][columnIndex];
    }

    solvedBoard.push(row.join(''));
  }

  boards.push(solvedBoard);
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
expected = [["Q"]];
actual = solveNQueens(numQueens);
console.assert(areEquivalent(expected, actual), '%o', { numQueens, expected, actual });

numQueens = 2;
expected = [];
actual = solveNQueens(numQueens);
console.assert(areEquivalent(expected, actual), '%o', { numQueens, expected, actual });

numQueens = 3;
expected = [];
actual = solveNQueens(numQueens);
console.assert(areEquivalent(expected, actual), '%o', { numQueens, expected, actual });

numQueens = 4;
expected = [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]];
actual = solveNQueens(numQueens);
console.assert(areEquivalent(expected, actual), '%o', { numQueens, expected, actual });

numQueens = 5;
expected = [];
actual = solveNQueens(numQueens);
console.assert(areEquivalent(expected, actual), '%o', { numQueens, expected, actual });

numQueens = 9;
expected = [];
console.time('performance');
actual = solveNQueens(numQueens);
console.timeEnd('performance');