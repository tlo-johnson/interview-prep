// https://www.algoexpert.io/questions/balanced-brackets
// time: O(n)
// space: O(n)

function balancedBrackets(str) {
  const stack = [];
  for (let character of str) {
    if (isOpening(character)) stack.push(character);
    else if (isClosing(character) && !isMatching(stack.pop(), character)) return false;
  }

  return stack.length === 0;
}

const isOpening = character => character === '(' || character === '{' || character == '[';

const isClosing = character => character === ')' || character === '}' || character == ']';

const isMatching = (open, close) => {
  if (open === '(') return close === ')'; 
  if (open === '{') return close === '}'; 
  if (open === '[') return close === ']'; 
}

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;
