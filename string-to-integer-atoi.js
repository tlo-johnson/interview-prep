// https://leetcode.com/problems/string-to-integer-atoi/

const myAtoi = str => {
  let result = 0;

  while (str[0] === ' ')
    str = str.substring(1);

  if (str.length === 0) return result;

  let isPositive = true;
  if (['+', '-'].includes(str[0])) {
    isPositive = str[0] === '+';
    str = str.substring(1);
  }

  while (str[0] === '0')
    str = str.substring(1);

  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  while (digits.includes(str[0])) {
    const digit = str[0];
    result = result * 10 + (digit.charCodeAt() - '0'.charCodeAt());
    str = str.substring(1);
  }

  if (!isPositive) result *= -1;

  const lowerBound = Math.pow(2, 31) * -1;
  if (result < lowerBound) return lowerBound;

  const upperBound = Math.pow(2, 31) - 1;
  if (result > upperBound) return upperBound;

  return result;
}

console.log(myAtoi('123'));
console.log(myAtoi('-123'));
console.log(myAtoi('-000123'));
console.log(myAtoi('-000123000'));
console.log(myAtoi('   -42'));
console.log(myAtoi('4193 with words'));

/*
The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.

Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
*/
