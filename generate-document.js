// https://www.algoexpert.io/questions/generate-document
// time: O(c + n), where c is num available characters, n is length of document
// space: O(n), where n is number of unique characters in the document

function generateDocument(characters, document) {
  const required = {};

  for (let character of document) {
    if (!required[character]) required[character] = 0;
    required[character]++;
  }

  for (let character of characters)
    if (required[character]) required[character]--;

  return Object.values(required).every(x => x <= 0);
}

// Do not edit the line below.
exports.generateDocument = generateDocument;
