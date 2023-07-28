// https://www.algoexpert.io/questions/reversePolishNotation
// time: O(n)
// space: O(n)

function reversePolishNotation(tokens) {
  const stack = [];
  for (let token of tokens) {
    if (!isOperator(token)) {
      stack.push(Number(token));
      continue;
    }

    const num2 = stack.pop();
    const num1 = stack.pop();
    const result = operate(num1, token, num2);
    stack.push(result);
  }

  return stack.pop();
}

const operations = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '/': (num1, num2) => Math.trunc(num1 / num2),
  '*': (num1, num2) => num1 * num2
}

const isOperator = token => Object.keys(operations).includes(token);

const operate = (num1, token, num2) => operations[token](num1, num2);

// Do not edit the line below.
exports.reversePolishNotation = reversePolishNotation;
