// https://leetcode.com/problems/palindrome-number/

const isPalindrome_optimal = num => {
  if (num < 0) return false;

  const arr = [];

  while (num !== 0) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }

  for (let left = 0, right = arr.length - 1; left < right; left++, right--)
    if (arr[left] !== arr[right]) return false;

  return true;
}

const isPalindrome = num => {
  if (num < 0) return false;

  let reverse = 0, clone = num;

  while (clone !== 0) {
    reverse = reverse * 10 + (clone % 10);
    clone = Math.floor(clone / 10);
  }

  return reverse === num;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
