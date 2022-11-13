// https://leetcode.com/problems/regular-expression-matching/

const isMatch = (str, pattern) => {
  if (!str.length && !pattern.length) return true;

  let i, j;

  if (!str.length && pattern.length) {
    return pattern[1] === '*' && isMatch(str, pattern.slice(2));
  }

  for (i = 0, j = 0; i < str.length && j < pattern.length; i++, j++) {
    const match = pattern[j];
    const modifier = pattern[j + 1];

    const matchFound = str[i] === match || match === '.';

    if (modifier === '*')
      return isMatch(str.slice(i), pattern.slice(j + 2)) || 
        (matchFound && isMatch(str.slice(i + 1), pattern.slice(j)));

    if (!matchFound) return false;
  }

  return i === str.length && isMatch('', pattern.slice(j));
}

str = "aa", pattern = "a";
console.assert(isMatch(str, pattern) === false);

str = "aa", pattern = "a*"
console.assert(isMatch(str, pattern));

str = "ab", pattern = ".*"
console.assert(isMatch(str, pattern));

str = "braile", pattern="b.*.*e"
console.assert(isMatch(str, pattern));

str = "aaa", pattern = "ab*a*c*a"
console.assert(isMatch(str, pattern));

str = "a", pattern = "ab*"
console.assert(isMatch(str, pattern));

str = "abcaaaaaaabaabcabac", pattern = ".*ab.a.*a*a*.*b*b*";
console.assert(isMatch(str, pattern));

str = "mississippi", pattern = "mis*is*ip*.";
console.assert(isMatch(str, pattern));

str = "ab", pattern = ".*c"
console.assert(!isMatch(str, pattern));
