/*

https://leetcode.com/problems/letter-combinations-of-a-phone-number/

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

*/

const letterCombinations = digits => {
  const graph = constructGraph(digits);
  return walkGraph(graph);
}

const constructGraph = digits => {
  const mapping = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  const graph = {};
  let leafs = [graph];

  digits.split('').forEach(digit => {
    const newLeafs = [];

    for (let leaf of leafs) {
      mapping[digit].forEach(character => {
        const temp = { };
        leaf[character] = temp;
        newLeafs.push(temp);
      });
    };

    leafs = newLeafs;
  });

  return graph;
}

const walkGraph = (node, prefix = "", combinations = []) => {
  var children = Object.keys(node);
  if (!children.length) prefix && combinations.push(prefix);

  children.forEach(child => walkGraph(node[child], prefix + child, combinations));

  return combinations;
}

console.log(letterCombinations('2'));
