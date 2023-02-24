// https://leetcode.com/problems/complex-number-multiplication/

const complexNumberMultiply = (num1, num2) => {
  const [real1, img1] = num1.split('+').map(num => Number(num.replace('i', '')));
  const [real2, img2] = num2.split('+').map(num => Number(num.replace('i', '')));

  const realAns = (real1 * real2) + (img1 * img2 * -1);
  const imgAns = (real1 * img2) + (img1 * real2);
  return `${realAns}+${imgAns}i`;
}
