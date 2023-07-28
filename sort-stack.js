// https://www.algoexpert.io/questions/sort-stack
// time: O(n^2)
// space: O(n)

function sortStack(stack) {
  if (stack.length <= 1) return stack;

  const top = stack.pop();
  sortStack(stack);

  const next = stack.pop();
  if (next <= top) {
    stack.push(next);
    stack.push(top);
    return stack;
  }

  stack.push(top)
  sortStack(stack);
  stack.push(next);

  return stack;
}

// Do not edit the line below.
exports.sortStack = sortStack;
