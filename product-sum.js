// https://www.algoexpert.io/questions/product-sum
// time: O(n)
// space: O(d) where d is the maximum depth of special array

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, depth = 1) {
  let sum = 0;

  for (let element of array) {
    if (Array.isArray(element)) sum += productSum(element, depth + 1);
    else sum += element * factorial(depth);
  }

  return sum;
}

const factorial = (num) => {
  let result = 1;
  while (num > 0) result *= num--;

  return result;
}

// Do not edit the line below.
exports.productSum = productSum;
