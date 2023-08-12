// https://www.algoexpert.io/questions/longest-common-subsequence
// time: O(s1 * s2). is this really correct?
// space: O(s1 * s2). is this really correct?

function longestCommonSubsequence(str1, str2, memo = {}) {
  if (!str1.length || !str2.length) return [];

  const key = `${str1}|${str2}`;
  if (memo[key]) return memo[key];

  if (str1[0] === str2[0]) {
    memo[key] = [ str1[0], ...longestCommonSubsequence(str1.slice(1), str2.slice(1), memo) ];
    return memo[key];
  }

  const includeCharacter = longestCommonSubsequence(str1, str2.slice(1), memo);
  const excludeCharacter = longestCommonSubsequence(str1.slice(1), str2, memo);
  const longest = includeCharacter.length > excludeCharacter.length ? includeCharacter : excludeCharacter;

  memo[key] = longest;
  return memo[key];
}

// Do not edit the line below.
exports.longestCommonSubsequence = longestCommonSubsequence;
