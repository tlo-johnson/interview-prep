/*

https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Constraints:

1 <= s.length <= 10^4
s consists of parentheses only '()[]{}'.
*/

const isValid = str => {
  const stack = [], openParens = ['(', '[', '{'];
  for (let character of str) {
    if (openParens.includes(character)) {
      stack.push(character);
      continue;
    }
    
    const open = stack.pop();
    if ((open === '(' && character === ')') ||
      (open === '[' && character === ']') ||
      (open === '{' && character === '}'))
    continue;
    
    return false;
  }
  
  return !stack.length
}

str = '()[]{}';
console.assert(isValid(str), '%o', {str});

str = '([]{}';
console.assert(!isValid(str), '%o', {str});

str = ')[]{}';
console.assert(!isValid(str), '%o', {str});

str = '())[]{}';
console.assert(!isValid(str), '%o', {str});