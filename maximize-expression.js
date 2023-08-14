// https://www.algoexpert.io/questions/maximize-expression
// time: O(n)
// space: O(n)

function maximizeExpression(array) {
  if (array.length < 4) return 0;

  array.reverse();

  const d = [];
  for (let index = 0; index < array.length; index++)
    d[index] = Math.max(0 - array[index], d[index - 1] || -Infinity);

  const c = [];
  for (let index = 1; index < array.length; index++)
    c[index] = Math.max(array[index] + d[index - 1], c[index - 1] || -Infinity)

  const b = [];
  for (let index = 2; index < array.length; index++)
    b[index] = Math.max(0 - array[index] + c[index - 1], b[index - 1] || -Infinity);

  const a = [];
  for (let index = 3; index < array.length; index++)
    a[index] = Math.max(array[index] + b[index - 1], a[index - 1] || -Infinity)

  return a[a.length - 1];
}

// Do not edit the line below.
exports.maximizeExpression = maximizeExpression;

/*
    [ 7,  2, -3,  1,  6,  3 ]
    
d = [ -7, -2,  3,  3,  3,  3 ] // max(0 - array[i], d[i - 1])
c = [  n, -5, -5,  4,  9,  9 ] // max(array[i] + d[i - 1], c[i - 1])
b = [  n,  n, -2, -2, -2,  6 ] // max(0 - array[i] + c[i - 1], b[i - 1])
a = [  n,  n,  n, -1,  4,  4 ] // max(array[i] + b[i - 1], a[i - 1])

*/
