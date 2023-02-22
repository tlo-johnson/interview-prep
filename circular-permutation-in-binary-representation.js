// https://leetcode.com/problems/circular-permutation-in-binary-representation/

// failed solve

const circularPermutation = (numBits, start) => {
  let length = Math.pow(2, numBits);
  return findPermutation(length, [start], start);
}

const findPermutation = (length, permutation, previousNum) => {
  if (permutation.length === length)
    return permutation;

  for (let count = 0; count < length; count++) {
    if (differsByOneBit(previousNum, count) && !permutation.includes(count)) {
      const result = findPermutation(length, [...permutation, count], count);
      if (result && differsByOneBit(result[0], result[result.length - 1]))
        return result;
    }
  }
}

const differsByOneBit = (num1, num2) => {
  const x = Math.pow(num1, num2);
  return x && (!(x & (x - 1)));
}
