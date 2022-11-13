// https://leetcode.com/problems/regular-expression-matching/

const isMatch = (str, pattern) => {
  if (!pattern.length) return !str.length;

  const matchFound = str && (str[0] === pattern[0] || pattern[0] === '.');

  if (pattern.length >= 2 && pattern[1] === '*')
    return isMatch(str, pattern.slice(2)) || (matchFound && isMatch(str.slice(1), pattern));

  return matchFound && isMatch(str.slice(1), pattern.slice(1));
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
