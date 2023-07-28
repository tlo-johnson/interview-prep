// https://www.algoexpert.io/questions/next-greater-element
// time: O(n)
// space: O(n)

function nextGreaterElement(array) {
  if (!array.length) return [];

  const stack = [{ value: array[0], index: 0 }];
  const result = [];

  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    if (element <= stack[stack.length - 1].value) {
      stack.push({ value: element, index });
      continue;
    }

    while (stack.length && element > stack[stack.length - 1].value) {
      const node = stack.pop();
      result[node.index] = element;
    }

    stack.push({ value: element, index });
  }

  for (let index = 0; index < array.length; index++) {
    if (!stack.length) break;

    const element = array[index];
    if (element <= stack[stack.length - 1].value) continue;

    while (stack.length && element > stack[stack.length - 1].value) {
      const node = stack.pop();
      result[node.index] = element;
    }
  }

  while (stack.length) {
    const { index } = stack.pop();
    result[index] = -1;
  }

  return result;
}

// Do not edit the line below.
exports.nextGreaterElement = nextGreaterElement;
