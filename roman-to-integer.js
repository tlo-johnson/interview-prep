// https://leetcode.com/problems/roman-to-integer/

const symbols = [
  { symbol: 'M', val: 1000 },
  { symbol: 'CM', val: 900 },
  { symbol: 'D', val: 500 },
  { symbol: 'CD', val: 400 },
  { symbol: 'C', val: 100 },
  { symbol: 'XC', val: 90 },
  { symbol: 'L', val: 50 },
  { symbol: 'XL', val: 40 },
  { symbol: 'X', val: 10 },
  { symbol: 'IX', val: 9 },
  { symbol: 'V', val: 5 },
  { symbol: 'IV', val: 4 },
  { symbol: 'I', val: 1 }
];

const romanToInt = (str, index = 0, result = 0) => {
  if (index === symbols.length) return result;

  const { symbol, val } = symbols[index];

  if (!str.startsWith(symbol))
    return romanToInt(str, ++index, result);

  result += val;
  return romanToInt(str.slice(symbol.length), index, result);
}

str = "III";
expected = 3;
output = romanToInt(str);
console.assert(output === expected, '%o', { str, expected, output });

str = "LVIII";
expected = 58;
output = romanToInt(str);
console.assert(output === expected, '%o', { str, expected, output });

str = "MCMXCIV";
expected = 1994;
output = romanToInt(str);
console.assert(output === expected, '%o', { str, expected, output });
