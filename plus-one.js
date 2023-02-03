// https://leetcode.com/problems/plus-one/

const plusOne = digits => {
  let index = digits.length - 1;
  while (index >= 0) {
    if (digits[index] < 9) {
      digits[index]++;
      break;
    } else {
      digits[index--] = 0;
    }
  }

  if (index === -1)
    digits.unshift(1);

  return digits;
}
