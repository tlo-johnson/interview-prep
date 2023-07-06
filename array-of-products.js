// https://www.algoexpert.io/questions/array-of-products
// time: O(n)
// space: O(n)

function arrayOfProducts(array) {
  const ltr = [], rtl = [], result = [];

  for (let index = 0; index < array.length; index++)
    ltr[index] = index === 0 ? array[index] : array[index] * ltr[index - 1];

  for (let index = array.length - 1; index >= 0; index--)
    rtl[index] = index === array.length - 1 ? array[index] : array[index] * rtl[index + 1];

  for (let index = 0; index < array.length; index++) {
    if (index === 0) {
      result[index] = rtl[index + 1];
      continue;
    }

    if (index === array.length - 1) {
      result[index] = ltr[index - 1];
      continue;
    }

    result[index] = ltr[index - 1] * rtl[index + 1];
  }

  return result;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
