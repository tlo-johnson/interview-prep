// https://leetcode.com/problems/regular-expression-matching/

const isMatch = (str, pattern) => {
  let i = j = 0;

  while (i < str.length && j < pattern.length) {
    console.log(str, i, pattern, j);

    if (str[i] === pattern[j]) {
      i++;
      j++;
      continue;
    }

    if (pattern[j] === '.') {
      i++;
      j++;
      continue;
    }

    if (pattern[j + 1] === '*') {
      return isMatch(str.slice(i), pattern.slice(j + 2)) ||
        isMatch(str.slice(i + 1), pattern.slice(j));
    }

    if (str[i] === str[i - 1]) {
      i++;
      j++;
      continue;
    }

    // pattern is '.*'
    j = nextValidIndex(pattern, j - 1);
    if (j === null)
      return true;

    const branches = [];
    while (i < str.length) {
      if (str[i] === pattern[j])
        branches.push(i);
      i++;
    }

    return branches.some(x => isMatch(str.slice(x), pattern.slice(j)));
  }

  return nextValidIndex(pattern, j) === null && i === str.length;
}

const nextValidIndex = (pattern, index) => {
  while (index < pattern.length - 1) {
    if (pattern[index] !== '.' || pattern[index + 1] !== '*')
      break;

    index += 2;
  }

  return (index === pattern.length) ? null : index;
}

/*
str = "aa", pattern = "a";
console.log(isMatch(str, pattern));

str = "aa", pattern = "a*"
console.log(isMatch(str, pattern));

str = "ab", pattern = ".*"
console.log(isMatch(str, pattern));

str = "brailez", pattern="b.*.*e."
console.log(isMatch(str, pattern));
*/

str = "aaa", pattern = "ab*a*c*a"
console.log(isMatch(str, pattern));

/*
 * note: there are bugs in the pseudocode below though it was the basis for writing the code
 *
 * while str && pattern
 *  if str[i] === pattern[j],
 *    i++
 *    j++
 *    continue
 *  else
 *    if pattern[j] === '.'
 *      i++, j++, continue
 *    else
 *      if pattern[j + 1] === '*'
 *        j += 2
 *        continue
 *      return false
 *
 *    if pattern[j] === '*'
 *      if pattern[j - 1] === '.'
 *        j = findNextValidIndex pattern (j - 1)
 *        if j === null
 *          return true
 *        while i < str.length
 *          if str[i] !== pattern[j]
 *            i++
 *            continue
 *          if recurse str.slice(i) pattern.slice(j + 1)
 *            return true
 *          i++
 *        return false
 *
 *  if findNextValidIndex pattern j
 *    return false
 *
 *  if i !== str.length
 *    return false
 *
 *  return true
 *
 *  findNextValidIndex: pattern index
 *    while index < pattern.length - 1
 *      if (pattern[index] === '.' || pattern[index + 1] === '*')
 *        index += 2
 *
 *    if index === pattern.length
 *      return null
 *
 *    return index
 */
