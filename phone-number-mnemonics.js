// https://www.algoexpert.io/questions/phone-number-mnemonics
// time: O(n * 4^n)
// space: O(n * 4^n)

function phoneNumberMnemonics(phoneNumber) {
  const mapping = {
    1: ['1'],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
    0: ['0'],
  }

  const mnemonics = [[]];
  for (let digit of phoneNumber) {
    const letters = mapping[digit];

    let numMneumonics = mnemonics.length;
    while (numMneumonics-- > 0) {
      const mnemonic = mnemonics.shift();
      for (let letter of letters) mnemonics.push([...mnemonic, letter]);
    }
  }

  return mnemonics.map(mnemonic => mnemonic.join(''));
}

// Do not edit the line below.
exports.phoneNumberMnemonics = phoneNumberMnemonics;
