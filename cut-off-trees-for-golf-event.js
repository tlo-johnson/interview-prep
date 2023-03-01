// https://leetcode.com/problems/cut-off-trees-for-golf-event/

const cutOffTree = forest => {
  const sortedHeights = sortTreeHeightsInForest(forest);
  return traverse(forest, sortedHeights);
}

const sortTreeHeightsInForest = forest => {
  const cells = [ ];

  for (let rowIndex = 0; rowIndex < forest.length; rowIndex++) {
    const row = forest[rowIndex];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      const column = row[columnIndex];
      if (column === 0 || column === 1) continue;
      cells.push({ treeHeight: column, position: { row: rowIndex, column: columnIndex } });
    }
  }

  return cells.sort((a, b) => a.treeHeight - b.treeHeight);
}

const traverse = (forest, cells) => {
  let position = { row: 0, column: 0 };
  let totalSteps = 0;

  for (let cell of cells) {
    const steps = walk(forest, position, cell.position);
    if (steps === -1) return -1;

    totalSteps += steps;
    position = cell.position;
  }

  return totalSteps;
}

const walk = (forest, start, end) => {
  const visited = new Set();
  const path = [{ steps: 0, row: start.row, column: start.column }];
  while (path.length) {
    let { steps, row, column } = path.shift();
    if (row === end.row && column === end.column)
      return steps;

    if (row < 0 || row > forest.length - 1 ||
      column < 0 || column > forest[0].length - 1 ||
      forest[row][column] === 0 ||
      visited.has(forest[row][column]))
      continue;

    visited.add(forest[row][column]);
    steps++;
    path.push({ steps, row: row + 1, column });
    path.push({ steps, row: row - 1, column });
    path.push({ steps, row, column: column + 1});
    path.push({ steps, row, column: column - 1});
  }

  return -1;
}

let forest = [[1,2,3],[0,0,0],[7,6,5]];
console.log(cutOffTree(forest));
