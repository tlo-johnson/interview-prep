// https://leetcode.com/problems/simplify-path/

const simplifyPath = path => {
  const components = path.split('/');
  const stack = [];

  components.forEach(path => {
    if (path === '.' || !path) return;
    if (path === '..') {
      stack.pop();
      return;
    }
    stack.push(path);
  });

  return `/${stack.join('/')}`;
}
