// https://leetcode.com/problems/permutation-sequence/

const getPermutation = (numElements, nthPermutation) => {
}

let numElements, nthPermutation, expected, actual;

numElements = 1;
nthPermutation = 1;
expected = "1";
actual = getPermutation(numElements, nthPermutation);
console.assert(expected === actual, '%o', { numElements, nthPermutation, expected, actual });

numElements = 2;
nthPermutation = 1;
expected = "12";
actual = getPermutation(numElements, nthPermutation);
console.assert(expected === actual, '%o', { numElements, nthPermutation, expected, actual });

numElements = 2;
nthPermutation = 2;
expected = "21";
actual = getPermutation(numElements, nthPermutation);
console.assert(expected === actual, '%o', { numElements, nthPermutation, expected, actual });

numElements = 3;
nthPermutation = 1;
expected = "123";
actual = getPermutation(numElements, nthPermutation);
console.assert(expected === actual, '%o', { numElements, nthPermutation, expected, actual });

numElements = 3;
nthPermutation = 2;
expected = "132";
actual = getPermutation(numElements, nthPermutation);
console.assert(expected === actual, '%o', { numElements, nthPermutation, expected, actual });
