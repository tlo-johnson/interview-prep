// https://www.algoexpert.io/questions/run-length-encoding
// time: O(n)
// space: O(n) worst case, need math for average case

function runLengthEncoding(str) {
  let index = 0;
  const result = [];

  while (index < str.length) {
    let count = 1;
    while(str[index] === str[index + 1]) {
      count++;
      index++;
    }

    encode(str[index], count, result);
    index++;
  }

  return result.join('');
}

const encode = (character, count, result) => {
  while (count > 9) {
    result.push(`9${character}`);
    count -= 9;
  }

  if (count > 0) result.push(`${count}${character}`);
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
