// https://leetcode.com/problems/ugly-number-iii/

const twoBillion = 2000000000;

const nthUglyNumber = (num, div1, div2, div3, left = 1, right = twoBillion) => {
  const mid = Math.floor((left + right) / 2);
  let numUglyNumbers = (mid / div1) + (mid / div2) - (mid / (div1 * div2)) + (mid / div3) - (mid / (div3 * div2)) - (mid / (div3 * div1));
  if (div2 % div1 === 0 || div1 % div2 === 0)
    numUglyNumbers--;
  if (div3 % div1 === 0 || div1 % div3 === 0)
    numUglyNumbers--;

  console.log({mid, numUglyNumbers});
  if (Math.floor(numUglyNumbers) === num)
    return smallerFactor(mid, div1, div2, div3);

  return numUglyNumbers < num ?
    nthUglyNumber(num, div1, div2, div3, mid + 1, right) :
    nthUglyNumber(num, div1, div2, div3, left, mid - 1);
}

const smallerFactor = (num, div1, div2, div3) => {
  while (num % div1 !== 0 && num % div2 !== 0 && num % div3 !== 0)
    num--;
  return num;
}

let num = 10000000;
let div1 = 200;
let div2 = 300;
let div3 = 500;
console.time('performance');
// console.log(nthUglyNumber(num, div1, div2, div3));
console.timeEnd('performance');

num = 3;
div1 = 2;
div2 = 3;
div3 = 5;
console.log(nthUglyNumber(num, div1, div2, div3));
