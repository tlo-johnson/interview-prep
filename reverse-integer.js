// https://leetcode.com/problems/reverse-integer/

const reverse = num => {
  const abs = Math.abs(num);
  const rev = Number(String(abs).split('').reverse().join(''));

  const result = num < 0 ? 0 - rev : rev;
  const low = 0 - Math.pow(2, 31);
  const high = Math.pow(2, 31) - 1;
  return result < low || result > high ? 0 : result;
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(-120));
console.log(reverse(1534236469));
