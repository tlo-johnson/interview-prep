/*
Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring
*/

const longestValidParentheses = (str) => {
}

let str, expected, actual;

str = '(()';
expected = 2
actual = longestValidParentheses(str);
console.assert(expected === actual, '%o', { str, expected, actual });

str = '(()()';
expected = 4
actual = longestValidParentheses(str);
console.assert(expected === actual, '%o', { str, expected, actual });

str = '(()())';
expected = 6
actual = longestValidParentheses(str);
console.assert(expected === actual, '%o', { str, expected, actual });

str = '()(()())(';
expected = 6
actual = longestValidParentheses(str);
console.assert(expected === actual, '%o', { str, expected, actual });
