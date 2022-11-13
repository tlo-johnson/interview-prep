// https://leetcode.com/problems/integer-to-roman/

const intToRoman = num => {
  let result = '';

  while (num) {
    result = addSymbols(num, result, 1000, 'M');
    num %= 1000;

    result = addSymbols(num, result, 900, 'CM');
    num %= 900;

    result = addSymbols(num, result, 500, 'D');
    num %= 500;

    result = addSymbols(num, result, 400, 'CD');
    num %= 400;

    result = addSymbols(num, result, 100, 'C');
    num %= 100;

    result = addSymbols(num, result, 90, 'XC');
    num %= 90;

    result = addSymbols(num, result, 50, 'L');
    num %= 50;

    result = addSymbols(num, result, 40, 'XL');
    num %= 40;

    result = addSymbols(num, result, 10, 'X');
    num %= 10;

    result = addSymbols(num, result, 9, 'IX');
    num %= 9;

    result = addSymbols(num, result, 5, 'V');
    num %= 5;

    result = addSymbols(num, result, 4, 'IV');
    num %= 4;

    result = addSymbols(num, result, 1, 'I');
    num %= 1;
  }

  return result;
}

const addSymbols = (num, result, divisor, symbol) => {
  let count = Math.floor(num / divisor);
  while (count-- > 0)
    result += symbol;

  return result;
}

num = 3;
expected = 'III';
result = intToRoman(num);
console.assert(intToRoman(num) === expected, { num, result, expected });

num = 58;
expected = 'LVIII';
result = intToRoman(num);
console.assert(intToRoman(num) === expected, { num, result, expected });

num = 1994;
expected = 'MCMXCIV';
result = intToRoman(num);
console.assert(intToRoman(num) === expected, { num, result, expected });
