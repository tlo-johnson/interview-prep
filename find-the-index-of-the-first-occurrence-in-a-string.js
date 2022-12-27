/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

const strStr = (haystack, needle) => {
  for (let index = 0; index < haystack.length; index++) {
    if (haystack[index] === needle[0]) {
      if (searchForNeedle(haystack, needle, index)) {
        return index;
      }
    }
  }

  return -1;
}

const searchForNeedle = (haystack, needle, startIndex) => {
  for (let index = 0; index < needle.length; index++) {
    if (needle[index] !== haystack[index + startIndex]) {
      return false;
    }
  }

  return true;
}

let expected, actual, haystack, needle;

haystack = "garden of eden";
needle = "gaga";
expected = -1;
actual = strStr(haystack, needle);
console.assert(expected === actual, '%o', { haystack, needle, expected, actual });

haystack = "garden of eden";
needle = "of";
expected = 7;
actual = strStr(haystack, needle);
console.assert(expected === actual, '%o', { haystack, needle, expected, actual });

haystack = "gardegarden";
needle = "garden";
expected = 5;
actual = strStr(haystack, needle);
console.assert(expected === actual, '%o', { haystack, needle, expected, actual });

haystack = "mississippi";
needle = "issip";
expected = 4;
actual = strStr(haystack, needle);
console.assert(expected === actual, '%o', { haystack, needle, expected, actual });

haystack = "actual";
needle = "a";
expected = 0;
actual = strStr(haystack, needle);
console.assert(expected === actual, '%o', { haystack, needle, expected, actual });
