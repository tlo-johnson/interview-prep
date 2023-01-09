// https://leetcode.com/problems/count-and-say

const countAndSay = (n) => {
  if (n === 1) {
    return '1';
  }

  return parse(countAndSay(n - 1));
}

const parse = (str) => {
  let digit;
  let count = 0;
  let result = '';

  while (str) {
    const newDigit = str.slice(0, 1);
    str = str.substring(1);

    if (newDigit === digit) {
      count++;
      continue;
    }

    if (digit !== undefined) {
      result += `${count}${digit}`;
    }
    count = 1;
    digit = newDigit;
  }

  result += `${count}${digit}`;
  return result;
}

let n, expected, actual;

n = 1;
expected = '1';
actual = countAndSay(n);
console.assert(expected === actual, '%o', { n, expected, actual });

n = 2;
expected = '11';
actual = countAndSay(n);
console.assert(expected === actual, '%o', { n, expected, actual });

n = 3;
expected = '21';
actual = countAndSay(n);
console.assert(expected === actual, '%o', { n, expected, actual });

n = 4;
expected = '1211';
actual = countAndSay(n);
console.assert(expected === actual, '%o', { n, expected, actual });
