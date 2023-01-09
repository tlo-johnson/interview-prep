/*
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.
*/

import { strictEquals } from './utils/array.js';

const solveSudoku = (board) => {
  solve(board);
  return board;
}

const solve = (board, startRow = 0, startColumn = 0) => {
  if (!isBoardValid(board)) {
    return false;
  }

  for (let rowIndex = startRow; rowIndex < board.length; rowIndex++) {
    const row = board[rowIndex];
    for (let columnIndex = startColumn; columnIndex < row.length; columnIndex++) {
      const cell = row[columnIndex];
      if (cell !== '.') continue;

      row[columnIndex] = '1';
      while (!solve(board, rowIndex, columnIndex + 1)) {
        console.log(row);
        const nextNum = Number(row[columnIndex]) + 1;
        if (nextNum > 9) {
          row[columnIndex] = '.';
          return false;
        }

        row[columnIndex] = `${nextNum}`;
      }
    }
  }

  return true;
};

const isBoardValid = (board) => {
  return allGridsValid(board) && allRowsValid(board) && allColumnsValid(board);
}

const allGridsValid = (board) => {
  const grids = [
    { x: [0, 2], y: [0, 2] },
    { x: [3, 5], y: [0, 2] },
    { x: [6, 8], y: [0, 2] },
    { x: [0, 2], y: [3, 5] },
    { x: [3, 5], y: [3, 5] },
    { x: [6, 8], y: [3, 5] },
    { x: [0, 2], y: [6, 8] },
    { x: [3, 5], y: [6, 8] },
    { x: [6, 8], y: [6, 8] }
  ];

  for (const grid of grids) {
    const { x, y } = grid;
    const [ rowStart, rowEnd ] = x;
    const [ columnStart, columnEnd ] = y;
    const set = new Set();

    for (let rowIndex = rowStart; rowIndex <= rowEnd; rowIndex++) {
      const row = board[rowIndex];
      for (let columnIndex = columnStart; columnIndex <= columnEnd; columnIndex++) {
        const num = row[columnIndex];
        if (num === '.') {
          continue;
        }

        if (set.has(num)) {
          return false;
        }

        set.add(num);
      }
    }
  }

  return true;
}

const allRowsValid = (board) => {
  for (let row of board) {
    const set = new Set();

    for (let index = 0; index < row.length; index++) {
      const num = row[index];
      if (num === '.') {
        continue;
      }

      if (set.has(num)) {
        return false;
      }

      set.add(num);
    }
  }

  return true;
}

const allColumnsValid = (board) => {
  const columns = { };

  for (let row of board) {
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      const num = row[columnIndex];
      if (num === '.') {
        continue;
      }

      if (!columns[columnIndex]) {
        columns[columnIndex] = new Set();
      }

      const set = columns[columnIndex];
      if (set.has(num)) {
        return false;
      }

      set.add(num);
    }
  }

  return true;
}

let board, expected, actual;

board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

expected = [
  ["5","3","4","6","7","8","9","1","2"],
  ["6","7","2","1","9","5","3","4","8"],
  ["1","9","8","3","4","2","5","6","7"],
  ["8","5","9","7","6","1","4","2","3"],
  ["4","2","6","8","5","3","7","9","1"],
  ["7","1","3","9","2","4","8","5","6"],
  ["9","6","1","5","3","7","2","8","4"],
  ["2","8","7","4","1","9","6","3","5"],
  ["3","4","5","2","8","6","1","7","9"]
];

actual = solveSudoku(board);
console.assert(strictEquals(expected, actual), '%o', { board, expected, actual });
