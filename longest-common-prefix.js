// https://leetcode.com/problems/longest-common-prefix/

const longestCommonPrefix = strs => {
  let result = strs[0].length;
  const characters = strs[0].split('');

  for (let index = 1; index < strs.length; index++) {
    let count = 0;
    const str = strs[index];

    for (let i = 0; i < characters.length; i++) {
      if (characters[i] !== str[i])
        break;
      count++;
    }

    result = Math.min(count, result);
  }

  return characters.slice(0, result).join('');
}

strs = ["flower","flow","flight"];
expected = "fl";
outcome = longestCommonPrefix(strs);
console.assert(outcome === expected, '%o', { strs, expected, outcome });

strs = ["dog","racecar","car"];
expected = "";
outcome = longestCommonPrefix(strs);
console.assert(outcome === expected, '%o', { strs, expected, outcome });

strs = ["ab", "a"];
expected = "a";
outcome = longestCommonPrefix(strs);
console.assert(outcome === expected, '%o', { strs, expected, outcome });
