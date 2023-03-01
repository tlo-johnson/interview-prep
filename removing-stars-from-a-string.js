// https://leetcode.com/problems/removing-stars-from-a-string
// using a stack is a much better implementation

const removeStars = (str, startIndex = 0) => {
  while (startIndex < str.length) {
    if (str[startIndex++] !== '*')
      continue;

    str = str.slice(0, startIndex - 2) + str.slice(startIndex);
    startIndex -= 2
  }

  return str;
}
