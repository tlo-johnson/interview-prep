// https://leetcode.com/problems/unique-morse-code-words/

const uniqueMorseRepresentations = words => {
  const set = new Set();
  words.map(transform).forEach(transformation => set.add(transformation));
  return set.size;
}

const morseCode = [
  ".-","-...","-.-.","-..",".",
  "..-.","--.","....","..",".---",
  "-.-",".-..","--","-.","---",
  ".--.","--.-",".-.","...","-",
  "..-","...-",".--","-..-","-.--",
  "--.."
];

const transform = word => {
  let output = '';
  for (let character of word)
    output += morseCode[character.charCodeAt() - 'a'.charCodeAt()];
  return output;
}
