// https://leetcode.com/problems/wildcard-matching/

const isMatch = (str, pattern) => {
  if (!str && !pattern) {
    return true;
  }

  if (!str && pattern) {
    return pattern[0] === '*' ? isMatch(str, pattern.slice(1)) : false;
  }

  if (str && !pattern) {
    return false;
  }

  const match = pattern[0];
  if (match === '*') {
    // let count = 0;
    // while (pattern[count] === '*') {
    //   count++;
    // };
    // return isMatch(str, pattern.slice(count)) || isMatch(str.slice(1), pattern);

    // idea: find all potential continuing points and match on those, instead of recursing on an *
    return isMatch(str, pattern.slice(1)) || isMatch(str.slice(1), pattern);
  }

  if (match === '?') {
    return isMatch(str.slice(1), pattern.slice(1));
  }

  return match === str[0] ? isMatch(str.slice(1), pattern.slice(1)) : false;
}

let str, pattern, expected, actual;

// str = "abc";
// pattern = "*";
// expected = true
// actual = isMatch(str, pattern);
// console.assert(expected === actual, '%o', { str, pattern, expected, actual });
//
// str = "abc";
// pattern = "a*";
// expected = true
// actual = isMatch(str, pattern);
// console.assert(expected === actual, '%o', { str, pattern, expected, actual });
//
// str = "abc";
// pattern = "ab*";
// expected = true
// actual = isMatch(str, pattern);
// console.assert(expected === actual, '%o', { str, pattern, expected, actual });
//
// str = "abc";
// pattern = "abc";
// expected = true
// actual = isMatch(str, pattern);
// console.assert(expected === actual, '%o', { str, pattern, expected, actual });
//
// str = "abcd";
// pattern = "abc";
// expected = false
// actual = isMatch(str, pattern);
// console.assert(expected === actual, '%o', { str, pattern, expected, actual });
//
// str = "abc";
// pattern = "ab?";
// expected = true
// actual = isMatch(str, pattern);
// console.assert(expected === actual, '%o', { str, pattern, expected, actual });
//
// str = "abc";
// pattern = "a?c";
// expected = true
// actual = isMatch(str, pattern);
// console.assert(expected === actual, '%o', { str, pattern, expected, actual });
//
// str = "abcd";
// pattern = "a?*";
// expected = true
// actual = isMatch(str, pattern);
// console.assert(expected === actual, '%o', { str, pattern, expected, actual });
//
// str = "";
// pattern = "*?"
// expected = false
// actual = isMatch(str, pattern);
// console.assert(expected === actual, '%o', { str, pattern, expected, actual });
//
// str = "";
// pattern = "****";
// expected = true
// actual = isMatch(str, pattern);
// console.assert(expected === actual, '%o', { str, pattern, expected, actual });
//
// str = "";
// pattern = "?";
// expected = false
// actual = isMatch(str, pattern);
// console.assert(expected === actual, '%o', { str, pattern, expected, actual });
//
// str = "abc";
// pattern = "*?*";
// expected = true
// actual = isMatch(str, pattern);
// console.assert(expected === actual, '%o', { str, pattern, expected, actual });
//
// str = "aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba";
// pattern = "a*******b";
// expected = false
// console.time('performance');
// actual = isMatch(str, pattern);
// console.timeEnd('performance');
// console.assert(expected === actual, '%o', { str, pattern, expected, actual });

str = "abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb";
pattern = "**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb";
expected = false
console.time('performance');
actual = isMatch(str, pattern);
console.timeEnd('performance');
console.assert(expected === actual, '%o', { str, pattern, expected, actual });
