// https://leetcode.com/problems/scramble-string/
// not solved

const isScramble = (start, end) => {
  const endArray = end.split('');
  return reverseScramble(start, endArray);
}

const reverseScramble = (start, end) => {
  console.log({start, end});
  if (start === end.join(''))
    return true;

  if (end.length === 1)
    return false;

  return findJoins(start, [], end)
    .flatMap(findSwaps)
    .some(str => reverseScramble(start, str));
}

const findJoins = (start, prefix, suffix) => {
  const joins = [];

  for (let index = 0; index < suffix.length - 1; index++) {
    const sequence = `${suffix[index]}${suffix[index + 1]}`;

    if (start.includes(sequence)) {
      const newPrefix = [...prefix, sequence];
      const newSuffix = suffix.slice(index + 2);
      joins.push([...newPrefix, ...newSuffix]);
      joins.push(...findJoins(start, newPrefix, newSuffix));
    }

    prefix.push(suffix[index]);
  }

  console.log({ joins });
  return joins;
}

const findSwaps = word => {
  const swaps = [[...word]];

  for (let index = 1; index < word.length; index++)
    swaps.push([...word.slice(index), ...word.slice(0, index)]);

  console.log({ swaps });
  return swaps;
}

let start, end, expected, actual;

// start = 'gre';
// end = 'gre';
// expected = true;
// actual = isScramble(start, end);
// console.assert(expected === actual, '%o', { start, end, expected, actual });
//
// start = 'gre';
// end = 'reg';
// expected = true;
// actual = isScramble(start, end);
// console.assert(expected === actual, '%o', { start, end, expected, actual });

start = 'great';
end = 'rgeat';
expected = true;
actual = isScramble(start, end);
console.assert(expected === actual, '%o', { start, end, expected, actual });
