// https://www.algoexpert.io/questions/knight-connection
// time and space complexity have some obscure explanation
// time: O(n * m) where n, m is horizontal, vertical distance between both knights
// space: O(n * m)

function knightConnection(knightA, knightB) {
  const queue = [{ square: knightA, turn: 0 }];
  const destination = str(knightB);
  let turns = 0;

  const visited = new Set();
  visited.add(str(knightA));

  while (queue.length) {
    const { square, turn } = queue.shift();
    if (str(square) === destination) {
      turns = turn;
      break;
    }

    nextSquares(square, visited).forEach(s => queue.push({ square: s, turn: turn + 1 }));
  }

  return Math.ceil(turns / 2);
}

const str = (square) => `${square[0]}${square[1]}`;

const nextSquares = (square, visited) => {
  const [x, y] = square;
  const nextMoves = [
    [x - 1, y - 2],
    [x - 1, y + 2],
    [x + 1, y - 2],
    [x + 1, y + 2],
    [x - 2, y - 1],
    [x - 2, y + 1],
    [x + 2, y - 1],
    [x + 2, y + 1],
  ].filter(s => !visited.has(str(s)));

  nextMoves.forEach(move => visited.add(str(move)));
  return nextMoves;
}

// Do not edit the line below.
exports.knightConnection = knightConnection;
