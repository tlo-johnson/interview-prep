// https://leetcode.com/problems/longest-palindromic-substring/

const longestPalindrome = str => {
  const indexes = {};
  let result = [0, 0];

  for (let index = 0; index < str.length; index++) {
    const character = str[index];
    const previousIndexes = indexes[character];
    if (!previousIndexes) {
      indexes[character] = [index];
      continue;
    }

    for (let previousIndex of previousIndexes) {
      if (!isPalindrome(str, previousIndex, index))
        continue;

      if (index - previousIndex > result[0] - result[1])
        result = [index, previousIndex];

      break;
    }

    indexes[character].push(index);
  }

  return str.slice(result[1], result[0] + 1);
}

const isPalindrome = (str, startIndex, endIndex) => {
  while(endIndex > startIndex)
    if (str[endIndex--] !== str[startIndex++])
      return false;

  return true;
}

str = "babad";
console.log(longestPalindrome(str));

str = "cbbd";
console.log(longestPalindrome(str));
