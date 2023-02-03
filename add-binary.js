// https://leetcode.com/problems/add-binary/

const addBinary = (str1, str2) => {
  str1 = str1.split('');
  str2 = str2.split('');

  let count = Math.max(str1.length, str2.length);
  let result = [], carry;

  while (count > 0) {
    const temp = sum(str1.pop(), str2.pop(), carry);
    result.unshift(temp[0]);
    carry = temp[1];
    count--;
  }

  if (carry === '1') result.unshift('1');
  return result.join('');
}

const sum = (str1 = '0', str2 = '0', carry = '0') => {
  if (str1 === '1' && str2 === '1' && carry === '1')
    return ['1', '1'];

  if ((str1 === '1' && str2 === '1' && carry === '0') ||
    (str1 === '1' && str2 === '0' && carry === '1') ||
    (str1 === '0' && str2 === '1' && carry === '1'))
    return ['0', '1'];

  if ((str1 === '1' && str2 === '0' && carry === '0') ||
    (str1 === '0' && str2 === '1' && carry === '0') ||
    (str1 === '0' && str2 === '0' && carry === '1'))
    return ['1', '0'];

  if (str1 === '0' && str2 === '0' && carry === '0')
    return ['0', '0'];
}
