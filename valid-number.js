// https://leetcode.com/problems/valid-number/

const isNumber = str => {
  const components = str.split(/e|E/);
  if (components.length > 2) return false;
  if (!isDecimal(components[0]) && !isInteger(components[0])) return false;
  return components.length === 1 || isInteger(components[1]);
}

const isDecimal = str => {
  if (str[0] === '+' || str[0] === '-')
    str = str.substring(1);

  const components = str.split('.');
  return components.length === 2 &&
    components.every(containsDigits) &&
    (components[0].length || components[1].length);
}

const isInteger = str => {
  if (str[0] === '+' || str[0] === '-')
    str = str.substring(1);

  return str.length && containsDigits(str);
}

const containsDigits = str => str.split('').every(character =>
  character.charCodeAt() >= "0".charCodeAt() && character.charCodeAt() <= "9".charCodeAt()
);
