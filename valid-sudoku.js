// https://leetcode.com/problems/valid-sudoku/?envType=study-plan&id=data-structure-i

const isValidSudoku = board => {
  const validBoard = { };

  for (let rowIndex = 0; rowIndex < board.length; rowIndex++)
    for (let columnIndex = 0; columnIndex < board[rowIndex].length; columnIndex++) {
      if (board[rowIndex][columnIndex] === '.') continue;

      if (!isValidRow(validBoard, board[rowIndex][columnIndex], rowIndex)
        || !isValidColumn(validBoard, board[rowIndex][columnIndex], columnIndex)
        || !isValidGrid(validBoard, board[rowIndex][columnIndex], rowIndex, columnIndex))
        return false;
    }

  return true;
}

const isValidRow = (validBoard, num, rowIndex) => {
  const key = `row-${rowIndex}`;
  return isValid(validBoard, key, num);
}

const isValidColumn = (validBoard, num, columnIndex) => {
  const key = `column-${columnIndex}`;
  return isValid(validBoard, key, num);
}

const isValidGrid = (validBoard, num, rowIndex, columnIndex) => {
  const key = `grid-${Math.floor(rowIndex / 3)}${Math.floor(columnIndex / 3)}`;
  return isValid(validBoard, key, num);
}

const isValid = (validBoard, key, num) => {
  if (!validBoard[key]) {
    validBoard[key] = new Set(num);
    return true;
  }

  if (validBoard[key].has(num)) return false;

  validBoard[key].add(num);
  return true;
}

let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board));
