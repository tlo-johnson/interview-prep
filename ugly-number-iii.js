// https://leetcode.com/problems/ugly-number-iii/

const nthUglyNumber = (num, div1, div2, div3) => {
  const smallestDiv = BigInt(Math.min(div1, div2, div3));
  const biggestDiv = BigInt(Math.max(div1, div2, div3));
  const middleDiv = BigInt(div1) + BigInt(div2) + BigInt(div3) - smallestDiv - biggestDiv;

  let answer = BigInt(smallestDiv) * BigInt(num);
  let overCount = (answer / middleDiv) - (answer / (middleDiv * smallestDiv)) +
    (answer / biggestDiv) - (answer / (biggestDiv * smallestDiv)) - (answer / (biggestDiv * middleDiv));

  if (middleDiv % smallestDiv === 0)
    overCount--;
  if (biggestDiv % smallestDiv === 0)
    overCount--;

  while (overCount-- > 0)
    answer = [
      smallerFactor(answer, smallestDiv),
      smallerFactor(answer, middleDiv),
      smallerFactor(answer, biggestDiv)
    ].reduce(maxBigInt);

  return answer;
}

const smallerFactor = (num, divisor) => {
  let dividend = num / divisor;
  let remainder = num % divisor;
  if (remainder === 0n)
    dividend -= 1n;
  return divisor * dividend;
}

const maxBigInt = (answer, current) => answer > current ? answer : current;

const num = 10000000;
const div1 = 200;
const div2 = 300;
const div3 = 500;
console.time('performance');
console.log(nthUglyNumber(num, div1, div2, div3));
console.timeEnd('performance');
