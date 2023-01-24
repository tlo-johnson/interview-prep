// https://leetcode.com/problems/powx-n/

const myPow = (base, exponent) => {
  const func = (exponent > 0) ? multiply : divide;

  if (exponent === 0) {
    return 1;
  }

  let absExponent = Math.abs(exponent);

  if (absExponent === 1) {
    return func(1, base);
  }

  if (absExponent % 2 === 0) {
    const temp = myPow(base, exponent / 2);
    return temp * temp;
  } else {
    const newExponent = exponent > 0 ? exponent - 1 : exponent + 1;
    const temp = myPow(base, newExponent / 2);
    return func(temp * temp, base);
  }
}

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

let base, exponent, expected, actual;

base = 2;
exponent = 10;
expected = 1024;
actual = myPow(base, exponent);
console.assert(expected === actual, '%o', { base, exponent, expected, actual });

base = 2;
exponent = -10;
expected = 0.0009765625;
actual = myPow(base, exponent);
console.assert(expected === actual, '%o', { base, exponent, expected, actual });

base = 2.1;
exponent = 3;
expected = 9.26100;
actual = myPow(base, exponent);
console.assert(expected === actual, '%o', { base, exponent, expected, actual });

base = 1;
exponent = -2147483648;
expected = 1;
console.time('performance');
actual = myPow(base, exponent);
console.timeEnd('performance');
console.assert(expected === actual, '%o', { base, exponent, expected, actual });
