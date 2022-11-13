// https://leetcode.com/problems/regular-expression-matching/

const isMatch = (str, pattern) => {
  let i, j;

  for (i = 0, j = 0; i < str.length && j < pattern.length;) {
    const currMatch = pattern[j];
    const modifier = pattern[j + 1];

    if (modifier === '*')
      return processZero(str, pattern, i, j) || processOneOrMore(str, pattern, i, j);

    if (currMatch === '.' || str[i] === currMatch) {
      i++;
      j++;
      continue;
    }

    return false;
  }

  if (j !== pattern.length)
    for (j; j < pattern.length; j += 2)
      if (pattern[j + 1] !== '*') return false

  return i === str.length;
}

const processZero = (str, pattern, i, j) => isMatch(str.slice(i), pattern.slice(j + 2));

const processOneOrMore = (str, pattern, i, j) => {
  const currMatch = pattern[j];
  if (currMatch === '.')
    return processAnyOneOrMore(str, pattern, i, j);

  if (str[i] !== currMatch) return false;

  while (str[i++] === currMatch)
    if (isMatch(str.slice(i), pattern.slice(j + 2)))
      return true;

  return false;
}

const processAnyOneOrMore = (str, pattern, i, j) => {
  const remainingPattern = pattern.slice(j + 2);
  if (!remainingPattern) return true;

  while (i++ < str.length)
    if (isMatch(str.slice(i), remainingPattern)) return true;

  return false;
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
