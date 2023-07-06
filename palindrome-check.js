// https://www.algoexpert.io/questions/palindrome-check
// time: O(n)
// space: O(1)

function isPalindrome(str) {
  let left = 0, right = str.length - 1;
  while (left <= right)
    if (str[left++] !== str[right--]) return false;

  return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
