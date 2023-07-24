// https://www.algoexpert.io/questions/reveal-minesweeper
// time: O(wh) where w is width and h is height of board
// space: O(wh)

const revealMinesweeper = (board, row, column) => click(board, row, column);

const click = (board, row, column) => {
  const cell = board[row][column];
  if (cell === 'M') return gameOver(board, row, column);
  if (cell === 'H') return expandBoard(board, row, column);
  return board;
}

const gameOver = (board, row, column) => {
  board[row][column] = 'X';
  return board;
}

const expandBoard = (board, row, column) => {
  const numSurroundingMines = findMines(board, row, column);
  board[row][column] = `${numSurroundingMines}`;
  if (numSurroundingMines !== 0) return board;

  for (let [x, y] of surroundingCoordinates(board, row, column)) board = click(board, x, y);
  return board;
}

const findMines = (board, row, column) => {
  let sum = 0;
  for (let [x, y] of surroundingCoordinates(board, row, column))
    if (board[x][y] === 'M') sum++;

  return sum;
}

const surroundingCoordinates = (board, row, column) => {
  const coords = [];
  if (board[row - 1]?.[column - 1]) coords.push([row - 1, column - 1]);
  if (board[row - 1]?.[column]) coords.push([row - 1, column]);
  if (board[row - 1]?.[column + 1]) coords.push([row - 1, column + 1]);
  if (board[row][column - 1]) coords.push([row, column - 1]);
  if (board[row][column + 1]) coords.push([row, column + 1]);
  if (board[row + 1]?.[column - 1]) coords.push([row + 1, column - 1]);
  if (board[row + 1]?.[column]) coords.push([row + 1, column]);
  if (board[row + 1]?.[column + 1]) coords.push([row + 1, column + 1]);

  return coords;
}

// Do not edit the line below.
exports.revealMinesweeper = revealMinesweeper;
